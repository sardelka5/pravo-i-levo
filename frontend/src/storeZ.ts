/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import eventSlice from './features/event/eventSlice';

const store = configureStore({

  reducer: {
    eventState: eventSlice,
  },
});

export default store;


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

