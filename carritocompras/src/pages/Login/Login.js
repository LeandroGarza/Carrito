import React, {useState} from 'react';
import './Login.css';
import Title from './Components/Title/Title';
import Label from './Components/label/label';
import Input from './Components/input/input';

const Login = () => {

    const [ user , setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError , setPasswordError ] = useState(false);
    const [ isLogin , setIsLogin ] = useState(false);
    const [ hasError , setHasError ] = useState(false);

    function handleChange(name, value){
        if(name == 'usuario'){
            setUser(value)
            setHasError(false);
        }else{
            if(value < 4){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Leandro' && param.password === '12345'){
                const { user , password } = param;
                let ac = { user , password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account = { user , password}
        if(account){
            console.log('account:' , account)
        }
    }

    return (
        <div className='login-container'>
        { isLogin ?
            <div className='home-container'>
                <h1>hola, {user}</h1>
                <label>estas logueado</label>
            </div>
        :
            <div className='login-content'>
                <title text = 'Bienvenido' />
            
                {hasError &&
                    <label className='label-alert'>
                      usuario o contrasena incorrecta
                    </label>
                }

                <label text='Usuario' />
                <input
                attribute={{
                 id: 'usuario',
                 name: 'usuario',
                 type: 'text',
                 placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                />

                <label text = 'Contraasenia' />
                 <input
                attribute={{
                  id: 'Contraseña',
                  name: 'Contraseña',
                  type: 'password',
                 placeholder: 'Ingrese su Contraseña'
             }}
             handleChange={handleChange}
             param={passwordError}
                />

                { passwordError &&
                    <label className='label-error'>
                       Contraseña invalida
                    </label>
                }

                <div className='submit-button-container'>
                    <button onClick={handleSubmit} classname = 'submit'>
                        Ingresar
                    </button>
                </div>
            </div>
        }
        </div> 
    )
};

export default Login;