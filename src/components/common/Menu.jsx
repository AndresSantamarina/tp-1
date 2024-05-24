import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { filterNameHero } from "../../Constants/functions.js";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [buscarHeroe, setBuscarHeroe] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const heroe = filterNameHero(buscarHeroe);
    if (heroe.length > 0) {
      navigate(`/${heroe[0].superhero}`);
    } else {
      alert("Heroe no encontrado");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Marvel">Marvel</Nav.Link>
            <Nav.Link href="/DC">DC</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={buscarHeroe}
              onChange={(e) => setBuscarHeroe(e.target.value)}
            />
            <Button variant="outline-primary" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
