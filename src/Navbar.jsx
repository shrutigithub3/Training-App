import { NavLink } from 'react-router-dom';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';   
import {Nav, Navbar, Container} from 'react-bootstrap';  
function NavBar() {   
  return (  
    <nav class="nav-links">
    <Navbar bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">My Page</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <NavLink to ='./Home'>Home</NavLink> &nbsp;
          <NavLink to ='./Newformik'>Users</NavLink>    
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  </nav>
  );  
}  
 
   
export default NavBar;