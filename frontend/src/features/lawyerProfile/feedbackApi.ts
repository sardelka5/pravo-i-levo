import Feedback from './types/Feedback';

export async function loadFeedback(): Promise<Feedback[]> {
  const res = await fetch('/api/feedback');
  return res.json();
}
