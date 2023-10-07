import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import addUserReducer from './slices/user/addUserSlice';
import getOneUserReducer from './slices/user/getOneUser';
import allRecipesReducer from './slices/recipe/allRecipes';

const rootReducer = combineReducers({
  userAuth: authReducer,
  addUser: addUserReducer,
  getOneUser: getOneUserReducer,
  allRecipes: allRecipesReducer,
});

export default rootReducer;
