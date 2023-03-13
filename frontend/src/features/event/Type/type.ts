export type Event = {
  id: number;
  date: '';
  address: string;
  title: string;
  description: string;
  photo: string;
};
export type State = {
  events: Event[];
  oneEvent: Event;
  error: undefined | string;
};
