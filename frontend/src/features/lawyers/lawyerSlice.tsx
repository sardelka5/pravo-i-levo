import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './Type/State';
import * as api from './api';

const initialState: State = {
  lawyersList: [],
  oneLawyer: {
    id: 0,
    full_name: '',
    price: 0,
    description: '',
    speciality: '',
    experience: 0,
    photo: '',
    phone: '',
    email: '',
  },
};

export const loadLawyers = createAsyncThunk('lawyers/loadLawyers', async () => {
  const lawyers = await api.loadLawyers();
  return lawyers;
});

export const loadOneLawyer = createAsyncThunk(
  'lawyers/loadOneLawyer',
  async (id: number) => {
    const lawyer = await api.loadOneLawyer(id);
    return lawyer;
  },
);

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
