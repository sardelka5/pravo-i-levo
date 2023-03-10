import Lawyer  from "./Type/Lawyer";

export const loadLawyers = async (): Promise<Lawyer[]> => {
    const res = await fetch('/api/lawyers');
    return res.json();
}