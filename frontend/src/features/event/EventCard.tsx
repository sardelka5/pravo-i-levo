/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import { Container, Button } from 'react-bootstrap';
import { RootState } from '../../store';

function EventCard(): JSX.Element {
  const nav = useNavigate();
  const id = useParams();
  
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  const { events } = useSelector((store: RootState) => store.eventState);
  const event = events.find((el)=> el.id===Number(id.id))

 
  const geocode= (ymaps: any):void => {
    ymaps.geocode(coordinates)
      .then((result: any) => setCoordinates(result.geoObjects.get(0).geometry.getCoordinates()))
    }


  return (
    <Container className="stockContainer">
       <Container key={event?.id}>
            <h1>{event?.title}</h1>
            <Container className="imgDesc">
              <img src={event?.photo} alt="eventPhoto" />
              <p className="evenDate">{event?.date.slice(0,10)}</p>
              <p className="evenAdress">{event?.address}</p>
              <p className="eventInfo">{event?.description}</p>
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

      <Button type="button" className="btnBack" onClick={() => nav(-1)}>
        Назад
      </Button>
    </Container>
  );
}

export default EventCard;
