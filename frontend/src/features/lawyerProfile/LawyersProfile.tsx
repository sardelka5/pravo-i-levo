import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../storeFeedback';
import { loadFeedback } from './feedbackSlice';

function LawyerProfile(): JSX.Element {
  const dispatch = useAppDispatch();
  const feedbackList = useSelector((state: RootState) => state.feedback);

  useEffect(() => {
    dispatch(loadFeedback());
  }, [dispatch]);

  return (
    <Container>
      <Container>Отзывы:</Container>
      {/* {feedbackList.map((el) => (
        <div>{el.content}</div>
      ))} */}
    </Container>
  );
}

export default LawyerProfile;
