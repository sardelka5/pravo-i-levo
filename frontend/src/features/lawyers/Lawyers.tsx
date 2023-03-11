import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadLawyers } from './lawyerSlice';
import OneLawyers from './OneLawyers';

function Lawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const lawyersList = useSelector(
    (state: RootState) => state.lawyers.lawyersList,
  );

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  return (
    <Container className="flex-law">
      {lawyersList.map((lawyer) => (
        <OneLawyers key={lawyer.id} oneLawyers={lawyer} />
      ))}
    </Container>
  );
}

export default Lawyers;
