import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import http from '../../../helpers/http';

export const getOneUserAction = createAsyncThunk(
  'user/getOneUser',
  async (id, {rejectWithValue}) => {
    try {
      const response = await http().get(
        `${REACT_NATIVE_BACKEND_URL}/users/${id}`,
      );

      return response.data.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getOneUserSlice = createSlice({
  name: 'getOneUser',
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: builder => {
    builder.addCase(getOneUserAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getOneUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
    });

    builder.addCase(getOneUserAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default getOneUserSlice.reducer;
