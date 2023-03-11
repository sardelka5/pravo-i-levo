import React from 'react';
import Carousel from './Carousel/carousel';
import AboutUs from '../../App/AboutUs';
import { Container } from 'react-bootstrap';

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
