import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';
import { RootState } from '../../../store';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

function Carousel(): JSX.Element {
  const { events } = useSelector((store: RootState) => store.eventState);

  const nav = useNavigate();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {events.map((event) => (
        <SwiperSlide
          className="carousel-item active"
          onClick={() => nav(`events/${event.id}`)}
        >
          <img
            className="d-block w-100"
            src={`${event.photo}`}
            alt="First slide"
          />
          <h3>{`${event.title}`}</h3>
          <p>{`${event.date}`}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
