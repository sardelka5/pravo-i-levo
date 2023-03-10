import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import Lawyer from './Type/Lawyer';

export default function OneLawyers({oneLawyers}:{oneLawyers:Lawyer}):JSX.Element {
  return (
    <NavLink to={`/lawyers/:${oneLawyers.id}`} style={{width:'18rem'}}> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={oneLawyers.photo} />
      <Card.Body>
        <Card.Title>{oneLawyers.full_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{oneLawyers.experience}</ListGroup.Item>
        <ListGroup.Item>{oneLawyers.price}</ListGroup.Item>
      </ListGroup>
    
    </Card>
    </NavLink>
  )
}
