import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function HeaderAdmin(): JSX.Element {
  return (
    <Container className="header header-main">
      <Navbar className="header">
        <Container>
          <Navbar.Brand href="#home">ПРАВО. И ЛЕВО. Для админов.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/feedback">Отзывы</Nav.Link>
            <Nav.Link href="/admin/event">Мероприятия</Nav.Link>
            <Nav.Link href="/admin/lawyers">Юристы</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HeaderAdmin;
