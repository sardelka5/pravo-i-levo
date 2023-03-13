import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as apiEvent from './apiEvent';
import EventAdd from './types/EventAdd';

const initialState: State = {
  eventList: [],
  oneEvent: {
    id: 0,
    date: new Date(),
    address: '',
    title: '',
    description: '',
    photo: '',
  },
};

export const loadEvent = createAsyncThunk('event/loadEvent', () =>
  apiEvent.loadEvents(),
);

export const loadOneEvent = createAsyncThunk(
  'lawyers/loadOneEvent',
  async (id: number) => {
    const oneEvent = await apiEvent.loadOneEvent(id);
    return oneEvent;
  },
);

export const removeEvent = createAsyncThunk(
  'event/removeEvent',
  async (id: number) => {
    await apiEvent.removeEvents(id);
    return { id };
  },
);

export const createEvent = createAsyncThunk(
  'event/createEvent',
  (oneEvent: EventAdd) => apiEvent.createEvents(oneEvent),
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
      })
      .addCase(loadOneEvent.fulfilled, (state, action) => {
        state.oneEvent = action.payload;
      });
  },
});

export default eventSliceAdmin.reducer;
