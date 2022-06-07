import React , { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'
import bici2 from '../../images/bici.jpg';

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

    //interfaz grafica del login
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h1>BiciMundo "Tres F"</h1>
                    <h3><i><u>Bicicletas de Calidad Premium</u></i></h3>
                    <img src={bici2}  className="App-logo" alt="logo"/>

                    <br />
                    <input
                        type="text"
                        placeholder='Usuario'
                        name="username"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type= "password"
                        placeholder='Contraseña'
                        name="password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button className='btn btn-primary' onClick={()=> this.iniciarSesion()}> Iniciar Sesion</button>
                </header>
            </div>
        );
    }
}

export default Login;