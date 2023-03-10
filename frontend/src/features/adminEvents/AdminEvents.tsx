import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';

function AdminEvents(): JSX.Element {
  const dispatch = useAppDispatch();
  const admin = useSelector((state: RootState) => state.admin.admin);
  console.log(admin);

  if (admin.email === '') {
    return <Container>Ne admin</Container>;
  } else {
    return <Container>Admin</Container>;
  }
}

export default AdminEvents;
