import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adminReducer from './features/admin/authSlice';
import feedbackReducer from './features/lawyerProfile/feedbackSlice';
import lawyersReducer from './features/lawyers/lawyerSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    feedback: feedbackReducer,
    lawyers: lawyersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
