import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Navbar.Brand href="#home" className="ms-3">
          <img src="logo-url" alt="Logo" height="40" />
        </Navbar.Brand>
        <Form className="d-flex ms-auto me-3">
          <FormControl type="search" placeholder="Buscar" className="me-2" />
        </Form>
        <Nav className="me-3">
          <Nav.Link href="#agenda" className="text-danger fw-bold">Agenda</Nav.Link>
          <Nav.Link href="#discover">Descubrir</Nav.Link>
          <Nav.Link href="#map">Mapa</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;