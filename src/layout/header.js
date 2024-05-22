import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return <header>
            <Navbar expand="lg" className="bg-body-tertiary bg-header ">
                <Container>
                    <Navbar.Brand>
                        <img src="empresa.png" alt="imagen-empresa" className="imagen-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">
                                <i data-feather="home"></i> Inicio
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <i data-feather="users"></i> Nosotros
                            </Nav.Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <i data-feather="shield"></i> Desarrollo de software
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <i data-feather="shopping-cart"></i> Tiendas Virtuales
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <i data-feather="home"></i>Desarrollo web
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">
                                <i data-feather="book"></i> Portafolios
                            </Nav.Link>
                            <button class="btn-brand ms-lg-3">Contáctenos</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

}

export default Header;