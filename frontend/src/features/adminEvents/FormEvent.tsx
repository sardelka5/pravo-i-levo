import React, { useCallback, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import EventAdd from './types/EventAdd';
import { createEvent } from './eventSlice';
import Event from './types/Event';

type FormEventProps = {
  changeCard: Event;
};

function FormEvent({ changeCard }: FormEventProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(Date);
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File>();

  const handleData = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDate(event.target.value);
    },
    [],
  );

  const handleAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    },
    [],
  );

  const handleTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );

  const handleDescription = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    [],
  );

  const handlePhoto = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setPhoto(event.target.files[0]);
      }
    },
    [],
  );

  const handleCreateEvent: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    if (photo) {
      dispatch(
        createEvent({
          date: new Date(date),
          address,
          title,
          description,
          photo,
        }),
      );
      setAddress('');
      setTitle('');
      setDescription('');
      setPhoto(undefined);
    }
  };
  console.log(changeCard);

  return changeCard.id !== 0 ? (
    <Container>
      {' '}
      <Form onSubmit={handleCreateEvent}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="data"
            name="data"
            value={date}
            onChange={handleData}
            placeholder="Дата"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="address"
            value={changeCard.address}
            onChange={handleAddress}
            placeholder="Адресс"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="title"
            value={changeCard.title}
            onChange={handleTitle}
            placeholder="Тема"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="description"
            value={changeCard.description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="file"
            name="photo"
            onChange={handlePhoto}
            placeholder="Выберите фото"
          />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Form>
    </Container>
  ) : (
    <Container>
      {' '}
      <Form onSubmit={handleCreateEvent}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="data"
            name="data"
            value={date}
            onChange={handleData}
            placeholder="Дата"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={handleAddress}
            placeholder="Адресс"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
            placeholder="Тема"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
            placeholder="Описание"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="file"
            name="photo"
            onChange={handlePhoto}
            placeholder="Выберите фото"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Добавить событие
        </Button>
      </Form>
    </Container>
  );
}

export default FormEvent;
