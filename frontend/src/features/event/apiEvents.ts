import {Event } from "./Type/type"

export const loadEvents = async (): Promise<Event[]> => {
    const res = await fetch('/api/event');
    return res.json();
  };