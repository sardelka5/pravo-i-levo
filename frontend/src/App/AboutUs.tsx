import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';

function AboutUs(): JSX.Element {
  return (
    <Container className="container-header">
      <Container className="container-flex-row">
        <Card.Text className="header-text-main">
          ПРАВО. И ЛЕВО.
          <br />
          <br />
        </Card.Text>
        <Card.Text className="header-text">
          Правовой научпоп, где о праве рассказывают доступным языком.
          <br />
          <br />
          Лекции о праве и сервис по поиску специалиста.
        </Card.Text>
      </Container>
      <Image src="/SVG/header.svg" alt="svg" />
      <Image src="/SVG/circles.svg" alt="svg" className="circles" />
    </Container>
  );
}

export default AboutUs;
