import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Lawyer from './Type/Lawyer';

export default function OneLawyers({
  oneLawyers,
}: {
  oneLawyers: Lawyer;
}): JSX.Element {
  return (
    <Card className="all-lawyers-cards">
      <NavLink to={`/lawyers/${oneLawyers.id}`}>
        <div className="all-lawyers-cards-img">
          <Card.Img src={oneLawyers.photo} />
        </div>
        <Card.Body className="card-lawyer-small">
          <Card.Title>{oneLawyers.full_name}</Card.Title>
          <Card.Text>Направления работы: {oneLawyers.speciality}</Card.Text>
          <Card.Text>
            Цена за час от <b>{oneLawyers.price}</b> руб.
          </Card.Text>
        </Card.Body>
      </NavLink>
    </Card>
  );
}
