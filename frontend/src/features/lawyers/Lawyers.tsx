import React, { useEffect, useMemo, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadLawyers } from './lawyerSlice';
import OneLawyers from './OneLawyers';

function Lawyers(): JSX.Element {
  const dispatch = useAppDispatch();
  const [option, setOption] = useState('');
  const lawyersList = useSelector(
    (state: RootState) => state.lawyers.lawyersList,
  );

  useEffect(() => {
    dispatch(loadLawyers());
  }, [dispatch]);

  
    
  
//   const sortedLaw = [...lawyersList].filter((el)=>{
//     if(option=== '' || option === 'По специальности'){
//        return [...lawyersList]
//     }else{
//    el.speciality === option;
// }

  // })
  return (
    <>
      <Form.Select
        aria-label="Default select example"
        onChange={(e)=> setOption(e.target.value)}
      >
        <option>По специальности</option>

        {lawyersList.map((el) => (
          <option value={el.speciality} key={el.id}>{el.speciality} </option>
        ))}
      </Form.Select>
      <Container className="flex-law">
        {lawyersList.map((lawyer) => (
          <OneLawyers key={lawyer.id} oneLawyers={lawyer} />
        ))}
      </Container>
    </>
  );
}

export default Lawyers;
