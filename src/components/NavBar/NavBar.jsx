import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import logoPetHouse from '../../logoPetHouse.svg';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Link to="/"><img src={logoPetHouse} alt="logo" height={80}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">VETERINARIOS</Nav.Link>
              <NavDropdown title="MASCOTAS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PERROS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GATOS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ALIMENTOS PARA MASCOTAS" id="basic-nav-dropdown">
                <Link to="/categoria/perro">PERROS</Link>
                <NavDropdown.Divider />
                <Link to="/categoria/gato">GATOS</Link>
              </NavDropdown>
              <Nav.Link href="#link">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart">
            < CartWidget />
          </Link>
        </Container>
      </Navbar> 
    ); 
}

export default NavBar;