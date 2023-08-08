import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Header() {  
    const location = useLocation();
    console.log(location.state)
    const navigate = useNavigate();
    const { responseData } = location.state || {};
    
    
  
  return (  
    <Navbar bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">WELCOME</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="/userpage">Home</Nav.Link>  
          
          <Nav.Link href="/places">Places</Nav.Link> 
          
          <Nav.Link href="/signup">Profile Update</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="creatematch">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
          <Nav.Link href="/">Signout</Nav.Link>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  );  
}  
export default Header;  