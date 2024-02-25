import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//importing link from react router
import { Link } from 'react-router-dom';


//this nabvar component uses react bootstrap 
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home </Link>
            <Link to="/about">About</Link>
            <NavDropdown title="Photos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2"> Ceremony Photos-coming soon! </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Celebration Photos-coming soon! </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//this it is the default return .'export default' matches component & file name.
export default Navigation;