import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../storeLaw';
import { loadLawyers } from './lawyerSlice';
import OneLawyers from './OneLawyers';

function Lawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const lawyersList = useSelector(
    (state: RootState) => state.lawyers.lawyersList,
  );
  console.log(lawyersList);

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  return (
    <div>
      {lawyersList.map((lawyer) => (
        <OneLawyers key={lawyer.id} oneLawyers={lawyer}/>
      ))}
    </div>
  );
}

export default Lawyers;
