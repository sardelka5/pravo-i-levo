import React, { useEffect } from 'react';
import { Card, Container, Image, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loadOneLawyer } from '../lawyers/lawyerSlice';
import FeedbackForm from './FeedbackForm';
import { loadFeedback } from './feedbackSlice';
import './styles-fb-and-profile.css';

function LawyerProfile(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList,
  );

  const oneLawyer = useSelector((state: RootState) => state.lawyers.oneLawyer);

  useEffect(() => {
    dispatch(loadOneLawyer(Number(id)));
    dispatch(loadFeedback(Number(id)));
  }, [dispatch, id]);

  return (
    <Container>
      <div className="one-lawyer-card">
        <img className="img-big-lawyer" src={oneLawyer.photo} alt="lawyer" />
        <Card className="text-center card-one-lawyer">
          <Card.Title className="text-center big-ltr">
            {oneLawyer.full_name}
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Направление деятельности:</ListGroup.Item>
            <ListGroup.Item>{oneLawyer.speciality}</ListGroup.Item>

            <ListGroup.Item>
              Опыт работы с {oneLawyer.experience} года
            </ListGroup.Item>
            <ListGroup.Item>
              Цена за час от {oneLawyer.price} руб.
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>
            <b>{oneLawyer.description}</b>
          </Card.Text>
          <Card.Text>
            Контакты:
            <br />
            Телефон: <a href={`tel:${oneLawyer.phone}`}>{oneLawyer.phone}</a>
            <br />
            Email: <a href={`mailto:${oneLawyer.email}`}>{oneLawyer.email}</a>
          </Card.Text>
        </Card>
      </div>

      <Container className="container-lawyer-fb">
        <Container className="feedback-container">
          <h5>Отзывы:</h5>
          {feedbackList.map((el) => (
            <Card className="light-blue" key={el.id} style={{ width: '40rem' }}>
              <Card.Body>
                <Card.Title>{el.content}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Container>
        <FeedbackForm />
        <Image className="img-lawyer" src="/SVG/lawwyers-page.svg" />
      </Container>
    </Container>
  );
}

export default LawyerProfile;
