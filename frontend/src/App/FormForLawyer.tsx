import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function FormForLawyer({
  onSubmitForm,
  onClose,
}: {
  onSubmitForm: React.FormEventHandler<HTMLFormElement>;
  onClose: () => void;
}): JSX.Element {
  const [inputName, setInputName] = useState('');
  const [inputSpeciality, setInputSpeciality] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAbout, setInputAbout] = useState('');

  const handlerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputName(e.target.value);
  };

  const handlerSpeciality: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputSpeciality(e.target.value);
  };

  const handlerPhone: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputPhone(e.target.value);
  };

  const handlerEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputEmail(e.target.value);
  };

  const handlerAbout: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputAbout(e.target.value);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Control
        value={inputName}
        onChange={handlerName}
        size="lg"
        type="text"
        placeholder="ФИО"
      />
      <Form.Control
        value={inputSpeciality}
        onChange={handlerSpeciality}
        size="lg"
        type="text"
        placeholder="Направление деятельности"
      />
      <Form.Control
        value={inputPhone}
        onChange={handlerPhone}
        size="lg"
        type="phone"
        placeholder="Номер телефона"
      />
      <Form.Control
        value={inputEmail}
        onChange={handlerEmail}
        size="lg"
        type="email"
        placeholder="Email"
      />
      <Form.Label>О себе</Form.Label>
      <Form.Control
        value={inputAbout}
        onChange={handlerAbout}
        as="textarea"
        rows={3}
      />
      <Button className="button-blue" type="submit" onClick={onClose}>
        Отправить анкету
      </Button>
    </Form>
  );
}

export default FormForLawyer;
