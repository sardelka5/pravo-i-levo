import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import State from './types/State';
import * as api from './feedbackApi';

const initialState: State = {
  feedbackList: [],
};

export const loadFeedback = createAsyncThunk(
  'lawyers/loadFeedback',
  async () => {
    const feedback = await api.loadFeedback();
    return feedback;
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
  },
});

export default feedbackSlice.reducer;
