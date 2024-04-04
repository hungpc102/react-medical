import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiStaff } from '../../../api/staff_api';
import { decodeToken } from '../../../utils/jwt';
import axios from 'axios'; 

export const updateStaff = createAsyncThunk(
  'staff/update',
  async (staffData, { rejectWithValue}) => {
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
      const response = await axios.patch(apiStaff, staffData, config);
      return response.data;
    } catch (error) {
      if (error.response) { 
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateStaffSlice = createSlice({
    name: 'updateStaff',
    initialState: {
      data: null,
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateStaff.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateStaff.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.staff = action.payload; 
        })
        .addCase(updateStaff.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });

export default updateStaffSlice.reducer;
