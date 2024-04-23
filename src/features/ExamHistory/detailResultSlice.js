import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {apiResult} from '../../api/result_api';
import { decodeToken } from '../../utils/jwt';
import axios from 'axios'; 

export const getResult = createAsyncThunk(
  'result/detail',
  async (patient_id, { rejectWithValue}) => {
    try {
        const tokensString = localStorage.getItem('tokens');
        const tokens = JSON.parse(tokensString)
        const user = decodeToken(tokens.accessToken)

      const config = {
        headers: {
          'athorization': tokens.accessToken,
          'x-client-id': user.userId,
          'x-api-key': process.env.REACT_APP_API_KEY
        }
      };
      const response = await axios.post(apiResult.detail, patient_id, config);
      return response.data;
    } catch (error) {
      if (error.response) { 
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getResultSlice = createSlice({
    name: 'getResult',
    initialState: {
      data: null,
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null
    },
    reducers: {
        clearStatus: (state) => {
            state.status = 'idle';
            state.error = null;
            state.payload = null;
            },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getResult.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getResult.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload; 
        })
        .addCase(getResult.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });

  export const { clearStatus } = getResultSlice.actions;
export default getResultSlice.reducer;
