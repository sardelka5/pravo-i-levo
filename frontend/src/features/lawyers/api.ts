import { Anceta } from "./Type/Anceta";
import Lawyer  from "./Type/Lawyer";

export const loadLawyers = async (): Promise<Lawyer[]> => {
    const res = await fetch('/api/lawyers');
    return res.json();
}

export const tgLawyers = async (anceta: Anceta): Promise<void> => {

    const res = await fetch('/api/tg',{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      anceta
    })
})
    return res.json();
} 

export const loadLawyers = async (): Promise<Lawyer[]> => {
  const res = await fetch('/api/lawyers');
  return res.json();
};

export const loadOneLawyer = async (id: number): Promise<Lawyer> => {
  const res = await fetch(`/api/lawyers/${id}`);
  return res.json();
};