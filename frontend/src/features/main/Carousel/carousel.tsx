import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';
import { RootState, useAppDispatch } from '../../../store';
import { loadEvents } from '../../event/eventSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

function Carousel(): JSX.Element {
  const { events } = useSelector((store: RootState) => store.eventState);

  const nav = useNavigate();

  const dispatch = useAppDispatch();

  const sortedEvents = useMemo(
    () => [...events].filter((event) => new Date(event.date) > new Date()),
    [events],
  );

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

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
      {sortedEvents.map((event) => (
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
          <p>{`${event.date.slice(0,10)}`}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
