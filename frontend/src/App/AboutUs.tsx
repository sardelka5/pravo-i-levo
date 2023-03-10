import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';

function AboutUs(): JSX.Element {
  return (
    <Container className="container-header">
      <Card.Text className="header-text">ПРАВО. И ЛЕВО.</Card.Text>
      <Card.Text className="header-text">
        Правовой научпоп, где о праве рассказывают доступным языком.
        <br />
        <br />
        Лекции о праве и сервис по поиску специалиста.
      </Card.Text>
      <Image src="/SVG/header.svg" alt="svg" />
    </Container>
  );
}

export default AboutUs;
