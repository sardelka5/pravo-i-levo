import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loadOneLawyer } from '../lawyers/lawyerSlice';
import FeedbackForm from './FeedbackForm';
import { loadFeedback } from './feedbackSlice';

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
      <Container>Отзывы:</Container>
      {feedbackList.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
      {oneLawyer.full_name}

      <FeedbackForm />
    </Container>
  );
}

export default LawyerProfile;
