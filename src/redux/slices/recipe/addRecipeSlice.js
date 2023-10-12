import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from 'native-base';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import http from '../../../helpers/http';

const resetAddRecipe = createAction('recipe/reset/addRecipe');

export const addRecipeAction = createAsyncThunk(
  'recipe/addRecipe',
  async ({data, navigation}, {getState, rejectWithValue, dispatch}) => {
    const {token, user_id} = getState().userAuth;

    try {
      if (
        data.title === '' ||
        data.ingredients === '' ||
        data?.image?.uri === ''
      ) {
        Toast.show({
          title: 'Please, input all data',
          placement: 'top',
        });

        return rejectWithValue('Input is empty');
      }

      if (
        data.image.type !== 'image/jpeg' &&
        data.image.type !== 'image/jpg' &&
        data.image.type !== 'image/png'
      ) {
        Toast.show({
          title: 'File must be a .png, .jpg, or .jpeg',
          placement: 'top',
        });
        return rejectWithValue('File must be a .png, .jpg, or .jpeg');
      }

      // maksimal size 2 mb
      if (data.image.fileSize > 2_097_152) {
        Toast.show({
          title: 'File size should be less than 2MB',
          placement: 'top',
        });
        return rejectWithValue('File size should be less than 2MB');
      }

      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('title', data?.title);
      formData.append('ingredients', data?.ingredients);
      if (data?.video?.uri) {
        formData.append('video', data?.video);
      } else {
        formData.append('video', data?.video?.uri);
      }
      formData.append('image', data?.image);

      const response = await http(token).post(
        `${REACT_NATIVE_BACKEND_URL}/recipe`,
        formData,
      );

      if (response?.data?.data) {
        Toast.show({
          title: 'Add recipe success',
          placement: 'top',
        });

        navigation.navigate('Home');
      }

      dispatch(resetAddRecipe());
    } catch (error) {
      console.log(error);
      Toast.show({
        title: 'Add recipe fail.',
        placement: 'top',
      });

      return rejectWithValue('Add recipe fail');
    }
  },
);

const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState: {
    isCreated: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(addRecipeAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(resetAddRecipe, (state, action) => {
      state.isCreated = true;
    });

    builder.addCase(addRecipeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = false;
    });

    builder.addCase(addRecipeAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default addRecipeSlice.reducer;
