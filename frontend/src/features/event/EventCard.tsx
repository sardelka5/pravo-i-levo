/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  YMapsApi,
} from 'react-yandex-maps';
import { Container, Button } from 'react-bootstrap';
import { RootState } from '../../store';
import FormForEvent from './FormForEvent';
import Tarifs from '../tarif/Tarifs';

function EventCard(): JSX.Element {
  const nav = useNavigate();
  const id = useParams();
  const [showForm, setShowForm] = useState(false);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  const { events } = useSelector((store: RootState) => store.eventState);
  const event = events.find((el)=> el.id===Number(id.id))

  const handleClick = (): void => {
    setShowForm((p) => !p);
  };


  const handlerForm: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
    },
    [],
  );

 
  const geocode= async (ymaps: YMapsApi):Promise<void> => {
    await ymaps.load('geocode'); 
    ymaps.geocode(event?.address)
      .then((result: any) => 
      {
        setCoordinates(result.geoObjects.get(0).geometry.getCoordinates())
      })
    }


  return (
    <Container className="stockContainer">
       <Container key={event?.id}>
            <h1>{event?.title}</h1>
            <Container className="imgDesc">
              <img src={event?.photo} alt="eventPhoto" />
              <p className="evenDate">{event?.date}</p>
              <p className="evenAdress">{event?.address}</p>
              <p className="eventInfo">{event?.description}</p>
            </Container>
          <Container className="map">
            <YMaps>
                <Map onLoad={geocode}
                  defaultState={{
                  center: coordinates,
                  zoom: 17,
                  }}
                  enterprise
                  query={{
                    apikey: '3ffd02ca-c72d-48a9-a01d-0162a040aa08',
                  }}
                >
                  <Placemark geometry={coordinates} />
                  <FullscreenControl options={{ float: 'left' }} />
                  <ZoomControl options={{ float: 'left' }} />
               </Map>
            </YMaps>
        </Container>
        <Container>
          <Tarifs/>
        </Container>
        <Container className="Form-for-visit-event">
             <Button className="button-blue" onClick={handleClick}>
                Записаться на мероприятие
             </Button>
            {showForm && (
              <FormForEvent onSubmitForm={handlerForm} onClose={handleClick} />
        )}
        </Container>
      </Container>
    </Container>
  );
}

export default EventCard;