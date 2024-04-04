import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiDoctor } from '../../../api/doctor_api';
import { decodeToken } from '../../../utils/jwt';
import axios from 'axios'; 

export const updateDoctor = createAsyncThunk(
  'doctor/update',
  async (doctorData, { rejectWithValue}) => {
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
      const response = await axios.patch(apiDoctor, doctorData, config);
      return response.data;
    } catch (error) {
      if (error.response) { 
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateDoctorSlice = createSlice({
    name: 'updateDoctor',
    initialState: {
      data: null,
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateDoctor.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateDoctor.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.doctor = action.payload; 
        })
        .addCase(updateDoctor.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });

export default updateDoctorSlice.reducer;
