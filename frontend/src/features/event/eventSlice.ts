/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Type/type';
import * as apiEvents from './apiEvents'

const initialState: State = {
    events: [],
    error: undefined,
  };
  export const loadEvents = createAsyncThunk('allevents', () =>
  apiEvents.loadEvents()
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
        });
    },
  });
  
  export default eventSlice.reducer;