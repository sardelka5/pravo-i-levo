import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adminReducer from './features/admin/authSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
