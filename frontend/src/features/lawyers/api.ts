import Lawyer from './Type/Lawyer';

export const loadLawyers = async (): Promise<Lawyer[]> => {
  const res = await fetch('/api/lawyers');
  return res.json();
};

export const loadOneLawyer = async (id: number): Promise<Lawyer> => {
  const res = await fetch(`/api/lawyers/${id}`);
  return res.json();
};
