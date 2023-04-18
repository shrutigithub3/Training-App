import { NavLink } from 'react-router-dom';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';   
import {Nav, Navbar, Container} from 'react-bootstrap';  
function NavBar1() {   
  return (  
    <nav class="nav-links">
    <Navbar bg="dark" variant="dark"> 
    <Container>  
      <Navbar.Brand >My Application</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <NavLink to ='./CounterApp'>Day 1</NavLink>   &nbsp; &nbsp;
          <NavLink to ='./'>Day 2</NavLink>   &nbsp; &nbsp;  
          <NavLink to ='./'>Day 3</NavLink>   &nbsp; &nbsp; 
          <NavLink to ='./'>Day 4</NavLink>   &nbsp; &nbsp;
          <NavLink to ='./'>Day 5</NavLink>   &nbsp; &nbsp;
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  </nav>
  );  
}  
 
   
export default NavBar1;