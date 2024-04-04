import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {apiMedicalRecord} from '../../../api/medicalRecord_api';
import { decodeToken } from '../../../utils/jwt';
import axios from 'axios'; 

export const createRecord = createAsyncThunk(
  'create/medicalRecord',
  async (recordData, { rejectWithValue}) => {
    try {
      // Lấy tokens từ state, nếu bạn đã lưu chúng vào Redux store. Hoặc bạn có thể lấy từ localStorage như đoạn code ban đầu.
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
      const response = await axios.post(apiMedicalRecord.create, recordData, config);
      return response.data;
    } catch (error) {
      if (error.response) { 
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const createRecordSlice = createSlice({
    name: 'createRecord',
    initialState: {
      data: null,
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(createRecord.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createRecord.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload; 
        })
        .addCase(createRecord.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });

export default createRecordSlice.reducer;
