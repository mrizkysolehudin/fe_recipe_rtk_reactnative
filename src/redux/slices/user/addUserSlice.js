import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import http from '../../../helpers/http';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import {Toast} from 'native-base';

const resetAddUser = createAction('user/reset/addUser');

export const addUserAction = createAsyncThunk(
  'user/addUser',
  async ({data, navigation}, {rejectWithValue, dispatch}) => {
    try {
      if (
        data.name === '' ||
        data.email === '' ||
        data.phone === '' ||
        data.password === '' ||
        data.confirmPassword === ''
      ) {
        Toast.show({
          title: 'Please, input all data',
          placement: 'top',
        });
        return rejectWithValue('Input is empty');
      }

      if (data.password !== data.confirmPassword) {
        Toast.show({
          title: 'Password and confirm password must be correct.',
          placement: 'top',
        });
        return rejectWithValue(
          'Password and confirm password must be correct.',
        );
      }

      const response = await http().post(
        `${REACT_NATIVE_BACKEND_URL}/users/register`,
        data,
      );

      if (response.data.data) {
        Toast.show({
          title: 'Congratulations! Register success.',
          placement: 'top',
        });

        navigation.navigate('Login');
        dispatch(resetAddUser());
      }
    } catch (error) {
      Toast.show({
        title: 'Register error. Please try again...',
        placement: 'top',
      });
      return rejectWithValue('Register error');
    }
  },
);

const addUserSlice = createSlice({
  name: 'addUser',
  initialState: {
    isCreated: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(addUserAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(resetAddUser, (state, action) => {
      state.isCreated = true;
    });

    builder.addCase(addUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = false;
    });

    builder.addCase(addUserAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action?.payload;
    });
  },
});

export default addUserSlice.reducer;
