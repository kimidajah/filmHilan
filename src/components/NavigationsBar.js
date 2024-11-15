import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div id="navbar">
      <Navbar variant="dark fixed-top" >
        <Container>
          <Navbar.Brand href="#navbar" >HilmanFilm</Navbar.Brand >
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
