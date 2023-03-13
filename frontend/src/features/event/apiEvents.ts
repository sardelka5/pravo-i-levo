import { Event } from "./Type/type"

export const loadEvents = async (): Promise<Event[]> => {
  const res = await fetch('/api/events');
  return res.json();
};

export const loadOneEvent = async (id: number): Promise<Event> => {
  const res = await fetch(`/api/events/${id}`);
  return res.json();
};
