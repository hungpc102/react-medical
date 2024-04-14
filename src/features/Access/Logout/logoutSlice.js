// File: authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUer } from '../../../api/user_Api';
import { decodeToken } from '../../../utils/jwt';

import axios from 'axios'; 

export const logout = createAsyncThunk(
  'auth/logout',
  async (userData, { rejectWithValue }) => {
    try {
        const tokensString = localStorage.getItem('tokens');
        const tokens = JSON.parse(tokensString)
        const user = decodeToken(tokens.accessToken)
      const config = {
        headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'athorization': tokens.accessToken,
            'x-client-id': user.userId
          }
      };
      const response = await axios.post(apiUer.logout, userData, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutSlice = createSlice({
  name: 'logout',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user= action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});


export default logoutSlice.reducer;
