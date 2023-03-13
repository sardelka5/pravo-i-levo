import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import State from './types/State';
import * as api from './feedbackApi';

const initialState: State = {
  feedbackList: [],
};

export const loadFeedback = createAsyncThunk(
  'lawyers/loadFeedback',
  async (id: number) => {
    const feedback = await api.loadFeedback(id);
    return feedback;
  },
);

type Props = {
  feedbackName: string;
  inputDate: string;
  inputPhone: string;
  inputEmail: string;
  inputAboutFeedback: string;
  lawyer_id: number;
};

export const createFeedback = createAsyncThunk(
  'lawyers/createFeedback',
  async ({
    feedbackName,
    inputDate,
    inputPhone,
    inputEmail,
    inputAboutFeedback,
    lawyer_id,
  }: Props) => {
    const fb = await api.createFeedback({
      feedbackName,
      inputDate,
      inputPhone,
      inputEmail,
      inputAboutFeedback,
      lawyer_id,
    });

    // return fb;
  },
);

const feedbackSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFeedback.fulfilled, (state, action) => {
      state.feedbackList = action.payload;
    });
    // я не меняю стейт поэтому не добавляю новый отзыв
    // builder.addCase(createFeedback.fulfilled, (state, action) => {
    //   state.feedbackList.push(action.payload);
    // });
  },
});

export default feedbackSlice.reducer;
