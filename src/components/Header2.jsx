import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header2() {
    return <Navbar id="nav-main" expand="lg" className="d-none d-lg-block bg-main px-5 py-1">
        <Container fluid>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mb-2 mb-lg-0 w-100 gap-4 d-flex justify-content-start">
                    <Nav.Link className='link-second link-active' href="#home">Inicio</Nav.Link>
                    <Nav.Link className='link-second' href="#link">Servicios</Nav.Link>                                    
                    <Nav.Link className='link-second' href="#link">Nuestra sede</Nav.Link>
                    <Nav.Link className='link-second' href="#link">Sobre nosotros</Nav.Link>
                    <Nav.Link className='link-second' href="#link">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
}