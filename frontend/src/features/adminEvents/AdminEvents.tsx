import React, { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import assert from 'assert';
import { RootState, useAppDispatch } from '../../store';
import FormEvent from './FormEvent';
import { loadEvent, removeEvent, createEvent } from './eventSlice';
import AdminEventCard from './AdminEventCard';

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
  const events = useSelector((state: RootState) => state.eventList.eventList);

  const handleEventRemove = useCallback(
    (id: number): void => {
      dispatch(removeEvent(id));
    },
    [dispatch],
  );

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEventChange = useCallback(
    (id: number) => {
      const event = events.find((el) => el.id === id);
      assert(event);
      setCard(event);
    },
    [events],
  );

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
