import React, { useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Tarifs(): JSX.Element {
  const tarifs = useSelector((state: RootState) => state.tarifState.tarifs);

  return (
    <Container className="flex-law">
      {tarifs.map((tarif) => (
        <Container key={tarif.id}>
          <h3>{`${tarif.title}`}</h3>
          <p>{`${tarif.description}`}</p>
          <p>{`${tarif.price}`}</p>
        </Container>
      ))}
    </Container>
  );
}

export default Tarifs;
