import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from 'native-base';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import http from '../../../helpers/http';

const resetEditRecipe = createAction('recipe/reset/editRecipe');

export const editRecipeAction = createAsyncThunk(
  'recipe/editRecipe',
  async ({data, navigation, id}, {getState, rejectWithValue, dispatch}) => {
    try {
      const {token, user_id} = getState().userAuth;

      if (
        data.title === '' ||
        data.ingredients === '' ||
        data.video === '' ||
        data?.image?.uri === ''
      ) {
        Toast.show({
          title: 'Please, input all data',
          placement: 'top',
        });

        return rejectWithValue('Input is empty');
      }

      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('title', data?.title);
      formData.append('ingredients', data?.ingredients);
      formData.append('video', data?.video);
      formData.append('image', data?.image);

      const response = await http(token).put(
        `${REACT_NATIVE_BACKEND_URL}/recipe/${id}`,
        formData,
      );

      if (response?.data?.data) {
        Toast.show({
          title: 'Edit recipe success',
          placement: 'top',
        });

        navigation.navigate('MyRecipes');
        dispatch(resetEditRecipe());
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        title: 'Edit recipe fail.',
        placement: 'top',
      });

      return rejectWithValue('Edit recipe fail');
    }
  },
);

const editRecipeSlice = createSlice({
  name: 'editRecipe',
  initialState: {
    isCreated: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(editRecipeAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(resetEditRecipe, (state, action) => {
      state.isCreated = true;
    });

    builder.addCase(editRecipeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = false;
    });

    builder.addCase(editRecipeAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default editRecipeSlice.reducer;
