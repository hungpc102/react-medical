import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {apiWaitingRoom} from '../../../api/waitingRoom_api'
import { decodeToken } from '../../../utils/jwt';
import axios from 'axios'; 

export const addRecordToWaitingRoom = createAsyncThunk(
  'waitingRoom/addRecord',
  async (roomData, { rejectWithValue}) => {
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
      const response = await axios.post(apiWaitingRoom.addMedicalRecord, roomData, config);
      return response.data;
    } catch (error) {
      if (error.response) { 
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const addRecordToWaitingRoomSlice = createSlice({
    name: 'addRecordToWaitingRoom',
    initialState: {
      data: null,
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(addRecordToWaitingRoom.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addRecordToWaitingRoom.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload; 
        })
        .addCase(addRecordToWaitingRoom.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });

export default addRecordToWaitingRoomSlice.reducer;
