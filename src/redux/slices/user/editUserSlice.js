import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import http from '../../../helpers/http';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import {Toast} from 'native-base';

const resetEditUser = createAction('user/reset/editUser');

export const editUserAction = createAsyncThunk(
  'user/editUser',
  async ({data, navigation}, {getState, rejectWithValue, dispatch}) => {
    try {
      const {user_id, token} = getState().userAuth;

      if (
        data.name === '' ||
        data.email === '' ||
        data.phone === '' ||
        data?.photo?.uri === ''
      ) {
        Toast.show({
          title: 'Please, input all data',
          placement: 'top',
        });
        return rejectWithValue('Input is empty');
      }

      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('name', data?.name);
      formData.append('email', data?.email);
      formData.append('phone', data?.phone);
      formData.append('photo', data?.photo);

      const response = await http(token).put(
        `${REACT_NATIVE_BACKEND_URL}/users/${user_id}`,
        formData,
      );

      if (response.data.data) {
        Toast.show({
          title: 'Congratulations! Edit profile success.',
          placement: 'top',
        });

        navigation.navigate('Profile');
        dispatch(resetEditUser());
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        title: 'Edit error. Please try again...',
        placement: 'top',
      });
      return rejectWithValue('Edit error');
    }
  },
);

const editUserSlice = createSlice({
  name: 'editUser',
  initialState: {
    isEdited: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(editUserAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(resetEditUser, (state, action) => {
      state.isEdited = true;
    });

    builder.addCase(editUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isEdited = false;
    });

    builder.addCase(editUserAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default editUserSlice.reducer;
