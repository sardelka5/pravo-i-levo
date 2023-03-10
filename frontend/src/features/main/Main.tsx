import React from 'react';
import Carousel from './Carousel/carousel';


function Main(): JSX.Element {
  return (<div className="main_page">
  <div>Main</div>
  <div className="container_carousel">
        <Carousel />
      </div>
  </div>
  );
}

export default Main;
