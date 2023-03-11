import {Event } from "./Type/type"

export const loadEvents = async (): Promise<Event[]> => {
    const res = await fetch('/api/event');
    return res.json();
  };


  export const loadOneLawyer = async (id: number): Promise<Event> => {
    const res = await fetch(`/api/lawyers/${id}`);
    return res.json();
  };