import './App.css';
import Profile from './Portfolio_Container/Home/Profile';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import About from './Portfolio_Container/AboutMe/About';
import Contact from './Portfolio_Container/Contact/Contact';
import Footer from './Portfolio_Container/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>   
          <Navbar.Brand as={Link} to="/home">Mayuri</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
        <Routes>
            <Route path='About' element={<About/>}/>
            <Route path='home' element={<Profile/>}/>
            <Route path='Contact' element={<Contact/>}/>
          </Routes>
          
        </div>
        <Profile/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
