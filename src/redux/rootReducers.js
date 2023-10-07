import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';

const rootReducer = combineReducers({
  userAuth: authReducer,
});

export default rootReducer;
