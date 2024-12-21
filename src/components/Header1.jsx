import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header1() {
    return <Navbar id="nav-main" expand="lg" className="bg-white px-5 py-3">
        <Container fluid>
            <Navbar.Brand className='border-white' href="#home">
                <img src="logo.jpeg" height="50" alt="ADACEMIA VITA"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mb-2 mb-lg-0 w-100 gap-4 d-flex justify-content-end">
                    <Nav.Link className='link-main link-active' href="#home">Inicio</Nav.Link>
                    <Nav.Link className='link-main' href="#link">Ciclos</Nav.Link>                
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Pizarra interactiva
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">
                            Tutoría Personalizada
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">
                            Psicopedagogía
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">
                            Aula virtual
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='link-main' href="#link">Conócenos</Nav.Link>
                    <Nav.Link className='link-main' href="#link">Contáctanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
}