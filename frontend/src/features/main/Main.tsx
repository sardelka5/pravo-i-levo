import React from 'react';
import Carousel from './Carousel/carousel';
import AboutUs from '../../App/AboutUs';

function Main(): JSX.Element {
  return (<div className="main_page">
  <div>Main</div>
  <AboutUs />
  <div className="container_carousel">
        <Carousel />
      </div>
  </div>
  );
}

export default Main;
