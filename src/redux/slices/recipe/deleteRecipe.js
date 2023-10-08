import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from 'native-base';
import http from '../../../helpers/http';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';

export const deleteRecipeAction = createAsyncThunk(
  'recipe/deleteRecipe',
  async ({id, onRefresh, user_id}, {getState, rejectWithValue}) => {
    try {
      const {token} = getState().userAuth;

      const result = await http(token).delete(
        `${REACT_NATIVE_BACKEND_URL}/recipe/${id}`,
      );

      if (result) {
        Toast.show({
          title: 'Delete recipe success',
          placement: 'top',
        });
        await onRefresh(user_id);
      }
    } catch (error) {
      Toast.show({
        title: 'Delete recipe fail.',
        placement: 'top',
      });
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

const deleteRecipeSlice = createSlice({
  name: 'deleteRecipe',
  initialState: {
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(deleteRecipeAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteRecipeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isDelete = true;
    });

    builder.addCase(deleteRecipeAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default deleteRecipeSlice.reducer;
