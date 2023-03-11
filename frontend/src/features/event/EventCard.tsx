/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import { Container } from 'react-bootstrap';
import { RootState, useAppDispatch } from '../../store';
import { loadOneEvent } from './eventSlice';

function EventCard(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const event = useSelector((state: RootState) => state.eventState.oneEvent);

  useEffect(() => {
    dispatch(loadOneEvent(Number(id)));
  }, [dispatch, id]);

  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  const geocode = (ymaps: any): void => {
    ymaps
      .geocode(coordinates)
      .then((result: any) =>
        setCoordinates(result.geoObjects.get(0).geometry.getCoordinates()),
      );
  };

  return (
    <Container className="stockContainer">
      <Container key={event.id}>
        <h1>{event.title}</h1>
        <Container className="imgDesc">
          <img src={event?.photo} alt="eventPhoto" />
          {/* <p className="evenDate">{event.date}</p> */}
          <p className="evenAdress">{event.address}</p>
          <p className="eventInfo">{event.description}</p>
        </Container>
        <Container className="map">
          <YMaps onApiAvaliable={geocode}>
            <Map
              defaultState={{
                center: coordinates,
                zoom: 17,
              }}
            >
              <Placemark geometry={coordinates} />
              <FullscreenControl options={{ float: 'left' }} />
              <ZoomControl options={{ float: 'left' }} />
            </Map>
          </YMaps>
        </Container>
      </Container>
    </Container>
  );
}

export default EventCard;
