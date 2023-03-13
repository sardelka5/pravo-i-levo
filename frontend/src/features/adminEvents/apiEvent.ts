import type Event from './types/Event';
import EventAdd from './types/EventAdd';

export async function loadEvents(): Promise<Event[]> {
  const res = await fetch('/api/events');
  return res.json();
}

export const loadOneEvent = async (id: number): Promise<Event> => {
  const res = await fetch(`/api/events/${id}`);
  return res.json();
};

export async function removeEvents(id: number): Promise<void> {
  const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function createEvents(oneEvent: EventAdd): Promise<Event> {
  const formData = new FormData();
  formData.append('photo', oneEvent.photo);
  formData.append('date', oneEvent.date.toString());
  formData.append('address', oneEvent.address);
  formData.append('description', oneEvent.description);
  formData.append('title', oneEvent.title);

  const res = await fetch('/api/events', {
    method: 'POST',
    body: formData,
    // headers: {
    //   'content-type': 'mulpipart/form-data',
    // },
  });
  console.log(res);

  return res.json();
}

export async function updateEvents(oneEvent: Event): Promise<void> {
  const res = await fetch(`/api/events/${oneEvent.id}`, {
    method: 'PUT',
    body: JSON.stringify({ oneEvent }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}
