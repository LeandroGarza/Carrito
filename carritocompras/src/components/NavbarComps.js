import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';
import bicilogo from '../images/bicicleta-logo.jpg';
import '../pages/css/menu.css';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class NavbarComps extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }


    render() {
        
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <img src={bicilogo} class="logo" />
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Inicio</Nav.Link>
                                <Nav.Link href="#action2">Bicicletas</Nav.Link>
                                <NavDropdown title="Carrito" id="navbarScrollingDropdown">
                                    <Nav.Link href="#" >

                                    </Nav.Link>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <button onClick={()=>this.cerrarSesion()} class="cerrar_sesion"> Cerrar Sesion</button>

                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}