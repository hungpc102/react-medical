// File: authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUer } from '../../../api/user_Api';

import axios from 'axios'; 

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: { 'x-api-key': process.env.REACT_APP_API_KEY }
      };
      const response = await axios.post(apiUer.login, userData, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user= action.payload;

        const { user, tokens } = action.payload.metadata; 
        localStorage.setItem('user', JSON.stringify(user)); 
        localStorage.setItem('tokens', JSON.stringify(tokens)); 
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});


export default loginSlice.reducer;
