import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import feedbackReducer from './features/lawyerProfile/feedbackSlice';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
