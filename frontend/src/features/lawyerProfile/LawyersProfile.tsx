import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loadOneLawyer } from '../lawyers/lawyerSlice';
import { loadFeedback } from './feedbackSlice';

function LawyerProfile(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList,
  );

  const oneLawyer = useSelector((state: RootState) => state.lawyers.oneLawyer);

  useEffect(() => {
    dispatch(loadFeedback());
    dispatch(loadOneLawyer(Number(id)));
  }, [dispatch, id]);

  return (
    <Container>
      <Container>Отзывы:</Container>
      {feedbackList.map((el) => (
        <div>{el.content}</div>
      ))}
      {oneLawyer.full_name}
    </Container>
  );
}

export default LawyerProfile;
