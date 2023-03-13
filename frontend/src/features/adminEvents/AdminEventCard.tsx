import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type Event from './types/Event';

type AdminEventCardProps = {
  card: Event;
  onRemove: (id: number) => void;
  onChange: (id: number) => void;
};

function AdminEventCard({
  card,
  onRemove,
  onChange,
}: AdminEventCardProps): JSX.Element {
  const handleRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    onRemove(card.id);
  };

  const handleChange: React.MouseEventHandler<HTMLButtonElement> = () => {
    onChange(card.id);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.photo} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Card.Text>{card.address}</Card.Text>
        {/* <Card.Text>
         {card.date}
        </Card.Text> */}
        <Button variant="primary" onClick={handleRemove}>
          Удалить
        </Button>
        <Button variant="primary" onClick={handleChange}>
          Изменить
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AdminEventCard;
