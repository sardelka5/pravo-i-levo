import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import Event from './types/Event';
import * as apiEvent from './apiEvent';
import EventAdd from './types/EventAdd';

const initialState: State = {
  eventList: [],
  eventChange: {
    id: 0,
    date: new Date(),
    address: '',
    title: '',
    description: '',
    photo: '',
  },
  eventAdd: {
    date: new Date(),
    address: '',
    title: '',
    description: '',
    photo: '',
  },
  eventRemove: { id: 0 },
};

export const loadEvent = createAsyncThunk('event/loadEvent', () =>
  apiEvent.loadNotes(),
);

export const removeEvent = createAsyncThunk(
  'event/removeEvent',
  async (id: number) => {
    await apiEvent.removeNote(id);
    return { id };
  },
);

export const createEvent = createAsyncThunk(
  'event/createEvent',
  (oneEvent: EventAdd) => apiEvent.createNote(oneEvent),
);

const eventSliceAdmin = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (element) => {
    element
      .addCase(loadEvent.fulfilled, (state, action) => {
        state.eventList = action.payload;
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        const result = state.eventList.filter(
          (el) => el.id !== action.payload.id,
        );
        state.eventList = result;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.eventList.push(action.payload);
      });
  },
});

export default eventSliceAdmin.reducer;
