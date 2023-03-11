import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './Type/State';
import * as api from './api';
import { Anceta } from './Type/Anceta';

const initialState: State = {
  lawyersList: [],
};

export const loadLawyers = createAsyncThunk('lawyers/loadLawyers', async () => {
  const lawyers = await api.loadLawyers();
  return lawyers;
});

export const loadTg = createAsyncThunk('lawyers/tg', async (anceta:Anceta) => {
  const tg = await api.tgLawyers(anceta);
  return tg;
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
