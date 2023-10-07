import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import http from '../../../helpers/http';

export const getAllRecipesAction = createAsyncThunk(
  'recipe/getAllRecipes',
  async (search, {rejectWithValue}) => {
    try {
      const response = await http().get(
        `${REACT_NATIVE_BACKEND_URL}/recipe?search=${search}`,
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const recipeSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(getAllRecipesAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAllRecipesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action?.payload;
    });

    builder.addCase(getAllRecipesAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default recipeSlice.reducer;
