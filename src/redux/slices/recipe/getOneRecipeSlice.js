import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import http from '../../../helpers/http';

export const getOneRecipeAction = createAsyncThunk(
  'recipe/getOneRecipe',
  async (id, {rejectWithValue}) => {
    try {
      const response = await http().get(
        `${REACT_NATIVE_BACKEND_URL}/recipe/${id}`,
      );

      return response.data.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getOneRecipeSlice = createSlice({
  name: 'getOneRecipe',
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: builder => {
    builder.addCase(getOneRecipeAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getOneRecipeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
    });

    builder.addCase(getOneRecipeAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default getOneRecipeSlice.reducer;
