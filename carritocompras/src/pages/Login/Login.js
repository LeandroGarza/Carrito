import React , { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'

const baseUrl="http://localhost:3001/usuarios"    //url de nuestra api!
const cookies = new Cookies();

class Login extends Component{

    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta = response[0];
                cookies.set('id', respuesta.id, {path:"/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path:"/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path:"/"});
                cookies.set('nombre', respuesta.nombre, {path:"/"});
                cookies.set('username', respuesta.username, {path:"/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="../menu";
            }else{
                alert('Usuario o contasena incorrecta');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }

    render(){
        return(
    <div className="containerPrincipal">
        <div className="containerSecundario">
            <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleChange}
                />
                <br />
                <label>Contraseña</label>
                <br />
                <input
                    type= "password"
                    className="form-control"
                    name="password"
                    onChange={this.handleChange}
                />
                <br />
                <button className='btn btn-primary' onClick={()=> this.iniciarSesion()}> Iniciar Sesion</button>
            </div>
        </div>    
    </div>
        );
    }
}


/*import React, {useState} from 'react';
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
};*/

export default Login;