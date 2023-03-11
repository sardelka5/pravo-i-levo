import Feedback from './types/Feedback';

export async function loadFeedback(id: number): Promise<Feedback[]> {
  const res = await fetch(`/api/feedback/${id}`);
  return res.json();
}

type Props = {
  feedbackName: string;
  inputDate: string;
  inputPhone: string;
  inputEmail: string;
  inputAboutFeedback: string;
  lawyer_id: number;
};

export async function createFeedback({
  feedbackName,
  inputDate,
  inputPhone,
  inputEmail,
  inputAboutFeedback,
  lawyer_id,
}: Props): Promise<Feedback> {
  const res = await fetch('/api/feedback', {
    method: 'POST',
    body: JSON.stringify({
      feedbackName,
      inputDate,
      inputPhone,
      inputEmail,
      inputAboutFeedback,
      id: lawyer_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
