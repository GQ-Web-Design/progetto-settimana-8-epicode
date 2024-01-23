import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Meteo Sensazionale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cerca" className="nav-link">Cerca</Link>
            {/* <Link to="/geolocalizzazione" className="nav-link">Geolocalizzazione</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
