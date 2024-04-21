import "./App.css";
import logo from "./logo.svg";
import Button from "react-bootstrap/Button";

// Setting up the header
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// Todo:
//  - Make Banner
//  - Make Menu Bar
//  - Make Jumbotron
//  - Main
//  - Contact

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <UncontrolledExample />
    </>
  );
}

function Header() {
  return (
    <Container fluid className="">
      <Row className="py-3 justify-content-center bg-primary text-white font-weight-bold">
        Grumby's Circus
      </Row>
    </Container>
  );
}

function Navigation() {
  return (
    <Navbar expand="md" className="bg-body-tertiary sticky-top">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="mx-3" href="#home">
          Menu
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Offerings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Classes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Private Lessons
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Open Gym</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Calendar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function UncontrolledExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        
        <img src={logo} alt="First SLide"/>
        <Carousel.Caption>
          <h3 className="text-black">First slide label</h3>
          <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={logo}/>
        <Carousel.Caption>
          <h3 className="text-black">Second slide label</h3>
          <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={logo}/>
        <Carousel.Caption>
          <h3 className="text-black">Third slide label</h3>
          <p className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default App;
