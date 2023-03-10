import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(): JSX.Element {
  return (
    <Container>
      <Container className="header header-main">
        <Navbar className="header">
          <Container>
            <Navbar.Brand href="/">ПРАВО. И ЛЕВО.</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/lawyers">Подобрать юриста</Nav.Link>
              <Nav.Link href="">Мероприятия</Nav.Link>
              <Nav.Link href="">Для юристов</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </Container>
  );
}

export default Header;
