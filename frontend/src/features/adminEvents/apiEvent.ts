import type Event from './types/Event';
import EventAdd from './types/EventAdd';

export async function loadNotes(): Promise<Event[]> {
  const res = await fetch('/api/event');
  return res.json();
}

export async function removeNote(id: number): Promise<void> {
  const res = await fetch(`/api/event/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function createNote(oneEvent: EventAdd): Promise<Event> {
  const formData = new FormData();
  formData.append('photo', oneEvent.photo);
  formData.append('date', oneEvent.date.toString());
  formData.append('addres', oneEvent.address);
  formData.append('description', oneEvent.description);
  formData.append('title', oneEvent.title);

  const res = await fetch('/api/event', {
    method: 'POST',
    body: formData,
    // headers: {
    //   'content-type': 'mulpipart/form-data',
    // },
  });
  console.log(res);

  return res.json();
}

export async function updateNote(oneEvent: Event): Promise<void> {
  const res = await fetch(`/api/notes/${oneEvent.id}`, {
    method: 'PUT',
    body: JSON.stringify({ oneEvent }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}
