import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiAuth from './apiAuth';
import Admin from './types/Admin';
import AuthAdmin from './types/AuthAdmin';

const initialState: AuthAdmin = {
  authChecked: false,
  admin: undefined,
};

export const getUser = createAsyncThunk('auth/admin', () => apiAuth.admin());

export const login = createAsyncThunk('auth/login', async (admin: Admin) => {
  if (!admin.email.trim() || !admin.password.trim()) {
    throw new Error('Не все поля заполнены');
  }
  return apiAuth.auth(admin);
});

export const logout = createAsyncThunk('auth/logout', apiAuth.logout);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.admin.email = action.payload.admin.email;
        state.admin = action.payload.admin;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.admin = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.admin = { email: '', password: '' };
      });
  },
});

export default authSlice.reducer;
