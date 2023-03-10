/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';

function EventCard(): JSX.Element {
  const nav = useNavigate();
  const id = useParams();

  const { events } = useSelector((store: RootState) => store.eventState);

  return (
    <div className="stockContainer">
      {events
        .filter((event) => event.id === Number(id.id))
        .map((event) => (
          <div key={event.id}>
            <h1>{event.title}</h1>
            <div className="imgDesc">
              <img src={event.photo} alt="eventPhoto" />
              <div className="evenDate">{event.date}</div>
              <div className="evenAdress">{event.address}</div>
              <div className="eventInfo">{event.description}</div>
            </div>
          </div>
        ))}
      <button type="button" className="btnBack" onClick={() => nav(-1)}>
        Назад
      </button>
    </div>
  );
}

export default EventCard;
