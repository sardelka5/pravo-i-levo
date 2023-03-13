import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from './Carousel/carousel';
import AboutUs from '../../App/AboutUs';

function Main(): JSX.Element {
  return (
    <Container className="main_page">
      <AboutUs />
      <div id="event-ancor" className="container_carousel">
        <Carousel />
      </div>
    </Container>
  );
}

export default Main;
