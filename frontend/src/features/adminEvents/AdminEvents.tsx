import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import FormEvent from './FormEvent';
import { loadEvent, removeEvent, createEvent } from './eventSlice';
import AdminEventCard from './AdminEventCard';
import EventAdd from './types/State';

function AdminEvents(): JSX.Element {
  const dispatch = useAppDispatch();
  const [card, setCard] = useState({
    id: 0,
    date: new Date(),
    address: '',
    title: '',
    description: '',
    photo: '',
  });

  useEffect(() => {
    dispatch(loadEvent());
  }, [dispatch]);

  const admin = useSelector((state: RootState) => state.admin.admin);
  const events = useSelector((state: RootState) => state.eventAdmin.eventList);

  const handleEventRemove = (id: number): void => {
    dispatch(removeEvent(id));
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEventChange = (id: number) => {
    setCard(events.find((el) => el.id === id)!);
  };

  if (!admin) {
    return <Container>Ne admin</Container>;
  }
  return (
    <Container>
      {' '}
      <FormEvent changeCard={card} />
      {events.map((el) => (
        <AdminEventCard
          key={el.id}
          card={el}
          onRemove={handleEventRemove}
          onChange={handleEventChange}
        />
      ))}
    </Container>
  );
}

export default AdminEvents;
