import React, { useCallback, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { login } from './authSlice';

function Authorization(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handlePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(login({ email, password })).then((dispathResult) => {
      if (login.fulfilled.match(dispathResult)) {
        navigate('/admin/event');
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Authorization;
