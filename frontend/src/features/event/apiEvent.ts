import type Event from './types/Event';

export async function loadNotes(): Promise<Event[]> {
  const res = await fetch('/api/events');
  return res.json();
}

export async function removeNote(id: number): Promise<void> {
  const res = await fetch(`/api/event/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function createNote(oneEvent: Event): Promise<Event> {
  const res = await fetch('/api/event', {
    method: 'POST',
    body: JSON.stringify(oneEvent),
    headers: {
      'Content-Type': 'application/json',
    },
  });
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
