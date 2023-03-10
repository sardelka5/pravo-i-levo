import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import lawyersReducer from './features/lawyers/lawyerSlice'

const store = configureStore({
    reducer: {
        lawyers: lawyersReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;