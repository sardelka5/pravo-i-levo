import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './Type/State';
import * as api from './api';
import { ApplicationForm } from './Type/ApplicationForm';

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
  filterLaw: []
};

export const loadLawyers = createAsyncThunk('lawyers/loadLawyers', async () => {
  const lawyers = await api.loadLawyers();
  return lawyers;
});

export const loadTg = createAsyncThunk(
  'lawyers/tg',
  async (applicationForm: ApplicationForm) => {
    const tg = await api.tgLawyers(applicationForm);
    return tg;
  },
);

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
  reducers: {
    // filterLawyers: (state, action) => {
    //   state.lawyersList = state.lawyersList.filter(
    //     (el) => el.speciality === action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loadLawyers.fulfilled, (state, action) => {
      state.lawyersList = action.payload;
    });
    builder.addCase(loadOneLawyer.fulfilled, (state, action) => {
      state.oneLawyer = action.payload;
    });
  },
});

export default lawyersSlice.reducer;
// export const { filterLawyers } = lawyersSlice.actions;