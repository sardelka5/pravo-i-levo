import type Event from './Event';

type State = {
  eventList: Event[];
  eventChange: Event;
  eventAdd: {
    date: Date;
    address: string;
    title: string;
    description: string;
    photo: string;
  };
  eventRemove: { id: number };
};

export default State;
