import React, { useEffect, useMemo, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadLawyers } from './lawyerSlice';
import OneLawyers from './OneLawyers';
import './lawyers-list.css';

function Lawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const [option, setOption] = useState('');

  const lawyersList = useSelector(
    (state: RootState) => state.lawyers.lawyersList,
  );

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  const sortedLaw = useMemo(() => {
    if (
      option === '' ||
      option === 'По специальности' ||
      option === 'По цене'
    ) {
      return [...lawyersList];
    }
    if (option === 'minToMax') {
      return [...lawyersList].sort((a, b) => a.price - b.price);
    }
    if (option === 'maxToMin') {
      return [...lawyersList].sort((a, b) => b.price - a.price);
    }
    return [...lawyersList].filter((el) => el.speciality === option);
  }, [lawyersList, option]);

  return (
    <>
      <Form.Select onChange={(e) => setOption(e.target.value)}>
        <option>По специальности</option>
        {lawyersList.map((el) => (
          <option value={el.speciality} key={el.id}>
            {el.speciality}
          </option>
        ))}
      </Form.Select>
      <Form.Select onChange={(e) => setOption(e.target.value)}>
        <option>По цене</option>
        <option value="minToMax">От меньшего к большему</option>
        <option value="maxToMin">От большего к меньшему</option>
      </Form.Select>
      <Container className="flex-law">
        {sortedLaw.map((lawyer) => (
          <OneLawyers key={lawyer.id} oneLawyers={lawyer} />
        ))}
      </Container>
    </>
  );
}

export default Lawyers;
