import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(): JSX.Element {
  return (
    <Container className="header header-main">
      <Navbar className="header">
        <Container className="header-space-between">
          <Navbar.Brand href="/">ПРАВО. И ЛЕВО.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/lawyers">Подобрать юриста</Nav.Link>
            <Nav.Link href="/#event-ancor">Мероприятия</Nav.Link>
            <Nav.Link href="#law-ancor">Для юристов</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
