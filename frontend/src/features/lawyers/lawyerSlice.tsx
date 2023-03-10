import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './Type/State';
import * as api from './api';

const initialState: State = {
  lawyersList: [],
};

export const loadLawyers = createAsyncThunk('lawyers/loadLawyers', async () => {
  const lawyers = await api.loadLawyers();
  return lawyers;
});

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadLawyers.fulfilled, (state, action) => {
      state.lawyersList = action.payload;
    });
  },
});

export default lawyersSlice.reducer;
