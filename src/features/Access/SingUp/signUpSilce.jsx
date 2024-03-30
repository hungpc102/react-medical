// File: authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUer } from '../../../api/user_Api';

import axios from 'axios'; 

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers:{'x-api-key':process.env.REACT_APP_API_KEY}
      }
      const response = await axios.post(apiUer.signup, userData, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    clearRegisterStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  }
});

export const { clearRegisterStatus } = signUpSlice.actions;

export default signUpSlice.reducer;
