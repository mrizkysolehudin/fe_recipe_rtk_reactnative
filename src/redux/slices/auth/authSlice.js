import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REACT_NATIVE_BACKEND_URL} from '../../../../env';
import {Toast} from 'native-base';
import http from '../../../helpers/http';

const initialState = {
  isLogout: false,
  isLogin: false,
  user_id: null,
  token: null,
};

export const loginAction = createAsyncThunk(
  'users/login',
  async ({data, navigation}, {rejectWithValue}) => {
    try {
      if (data.email === '' || data.password === '') {
        Toast.show({
          title: 'Please, input your email and password!',
          placement: 'top',
        });
        return rejectWithValue('Please, input your email and password!');
      }

      const response = await http().post(
        `${REACT_NATIVE_BACKEND_URL}/users/login`,
        data,
      );

      Toast.show({
        title: 'Congratulations! You are now logged in.',
        placement: 'top',
      });
      navigation.navigate('Home');

      return response.data.data;
    } catch (error) {
      Toast.show({
        title: 'Wrong password or email. Please try again.',
        placement: 'top',
      });
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'users/auth',
  initialState,
  reducers: {
    logoutAction: state => {
      state.isLogin = false;
      state.token = null;
      state.user_id = null;
    },
  },

  extraReducers: builder => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      state.token = action?.payload?.token;
      state.user_id = action?.payload?.user_id;
    });

    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMessage = action?.payload;
    });
  },
});

export const {logoutAction} = authSlice.actions;

export default authSlice.reducer;
