import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import addUserReducer from './slices/user/addUserSlice';

const rootReducer = combineReducers({
  userAuth: authReducer,
  addUser: addUserReducer,
});

export default rootReducer;
