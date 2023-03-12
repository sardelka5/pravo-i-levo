import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { createFeedback } from './feedbackSlice';

function FeedbackForm(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [showForm, setShowForm] = useState(true);
  const [showError, setShowError] = useState(false);

  const [feedbackName, setFeedbackName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAboutFeedback, setInputAboutFeedback] = useState('');

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      feedbackName &&
      inputDate &&
      inputPhone &&
      inputEmail &&
      inputAboutFeedback
    ) {
      dispatch(
        createFeedback({
          feedbackName,
          inputDate,
          inputPhone,
          inputEmail,
          inputAboutFeedback,
          lawyer_id: Number(id),
        }),
      );
      setShowForm(false);
    } else {
      setShowError(true);
    }
  };

  const handlerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFeedbackName(e.target.value);
  };

  const handlerDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputDate(e.target.value.toString());
  };

  const handlerPhone: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPhone(e.target.value);
  };

  const handlerEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputEmail(e.target.value);
  };

  const handlerAboutFeedback: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setInputAboutFeedback(e.target.value);
  };

  return (
    <Container>
      {showForm ? (
        <Form className="feedback-form" onSubmit={handlerSubmit}>
          <h5>Оставьте свой отзыв здесь:</h5>
          <Form.Control
            value={feedbackName}
            onChange={handlerName}
            type="text"
            placeholder="ФИО"
          />
          <Form.Label>Дата визита</Form.Label>

          <Form.Control
            value={inputDate}
            onChange={handlerDate}
            type="date"
            placeholder="Дата визита"
          />
          <Form.Control
            value={inputPhone}
            onChange={handlerPhone}
            type="phone"
            placeholder="Номер телефона"
          />
          <Form.Control
            value={inputEmail}
            onChange={handlerEmail}
            type="email"
            placeholder="Email"
          />
          <Form.Label>Расскажите о вашем опыте</Form.Label>
          <Form.Control
            value={inputAboutFeedback}
            onChange={handlerAboutFeedback}
            as="textarea"
            rows={3}
          />
          {showError && <div>Заполните все поля!</div>}
          <Button className="button-orange" type="submit">
            Оставить отзыв
          </Button>
        </Form>
      ) : (
        <h4>
          Спасибо за Ваш отзыв! <br />
          Он появится на странице после проверки админстратором.
        </h4>
      )}
    </Container>
  );
}

export default FeedbackForm;
