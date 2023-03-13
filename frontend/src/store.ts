import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adminReducer from './features/admin/authSlice';
import feedbackReducer from './features/lawyerProfile/feedbackSlice';
import lawyersReducer from './features/lawyers/lawyerSlice';
import eventSlice from './features/event/eventSlice';
import tarifSlice from './features/tarif/tarifSlice';
import eventSliceAdmin from './features/adminEvents/eventSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    eventAdmin: eventSliceAdmin,
    feedback: feedbackReducer,
    lawyers: lawyersReducer,
    eventState: eventSlice,
    tarifState: tarifSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
