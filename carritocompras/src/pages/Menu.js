import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import './css/menu.css';
import NavbarComps from '../components/NavbarComps';
import bici1 from '../images/bici_2.jpg';
import bici2 from '../images/negra.jpg';
import bici3 from '../images/roja.jpg';

const cookies = new Cookies();

class Menu extends Component {
    
    componentDidMount() {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('apellido_paterno: ' + cookies.get('apellido_paterno'));
        console.log('apellido_materno: ' + cookies.get('apellido_materno'));
        console.log('nombre: ' + cookies.get('nombre'));
        console.log('username: ' + cookies.get('username'));
        return (
            <div>
                <NavbarComps />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
                            <div className=" text-black">
                                <img src={bici1}
                                    className="card-img-top bici1" alt="bici celeste" />
                                <div className="card-body">
                                    <div className="text-center mt-1">
                                        <h4 className="card-title">Bicicleta Scott Spark RC 900 AXS</h4>
                                        <h6 className="text-primary mb-1 pb-3">Precio: $70.000</h6>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center " >
                                        <a href="https://cutt.ly/OJDdpKT"><button type="button" class="btn btn-danger flex-fill ms-1 btn-buy">Comprar Ahora</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div className=" text-black">
                                <img src={bici2}
                                    className="card-img-top" alt="bici negra" />
                                <div className="card-body">
                                    <div className="text-center mt-1">
                                        <h4 className="card-title">Mountain bike Raleigh Mojave 2.0 2021 R29</h4>
                                        <h6 className="text-primary mb-1 pb-3">Precio: $99.999</h6>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center " >
                                        <a href="https://cutt.ly/OJDdpKT"><button type="button" class="btn btn-danger flex-fill ms-1 btn-buy">Comprar Ahora</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                            <div className=" text-black">
                                <img src={bici3}
                                    className="card-img-top" alt="bici roja" />
                                <div className="card-body">
                                    <div className="text-center mt-1">
                                        <h4 className="card-title">Bicicleta Silverfox 2021 M frenos de disco mecánico</h4>
                                        <h6 className="text-primary mb-1 pb-3">Precio: $154.000</h6>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center " >
                                        <a href="https://cutt.ly/OJDdpKT"><button type="button" class="btn btn-danger flex-fill ms-1 btn-buy">Comprar Ahora</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu