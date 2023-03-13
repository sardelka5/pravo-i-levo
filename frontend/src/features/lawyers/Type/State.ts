import type Lawyer from './Lawyer';

type State = {
  lawyersList: Lawyer[];
  oneLawyer: Lawyer;
  filterLaw: Lawyer[];
};
export default State;
