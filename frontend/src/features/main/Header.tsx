import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const nav = useNavigate();

  const handleClick = (): void => {
    nav(-1);
  };

  return (
    <Container className="header header-main">
      <Navbar className="header">
        <Container>
          <Nav className="me-auto">
            {window.location.pathname.match(/[0-9]/gm) && (
              <Nav.Link onClick={handleClick}>
                <Image
                  src="/SVG/left.png"
                  alt="icon-back"
                  style={{ color: '#e5e5e5', height: '50%' }}
                />
              </Nav.Link>
            )}
            <Nav.Link href="/" className="logo-font">
              ПРАВО. И ЛЕВО.
            </Nav.Link>
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
