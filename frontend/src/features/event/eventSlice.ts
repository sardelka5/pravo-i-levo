/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Type/type';
import * as apiEvents from './apiEvents';

const initialState: State = {
  events: [],
  error: undefined,
  oneEvent: {
    id: 0,
    date: '',
    address: '',
    title: '',
    description: '',
    photo: '',
  },
};

export const loadEvents = createAsyncThunk('events/loadEvents', async () => {
  const events = await apiEvents.loadEvents();
  return events;
});

export const loadOneEvent = createAsyncThunk(
  'lawyers/loadOneEvent',
  async (id: number) => {
    const oneEvent = await apiEvents.loadOneEvent(id);
    return oneEvent;
  },
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(loadEvents.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadOneEvent.fulfilled, (state, action) => {
        state.oneEvent = action.payload;
      });
  },
});

export default eventSlice.reducer;
