import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import addUserReducer from './slices/user/addUserSlice';
import editUserReducer from './slices/user/editUserSlice';
import getOneUserReducer from './slices/user/getOneUser';
import allRecipesReducer from './slices/recipe/allRecipes';
import addRecipeReducer from './slices/recipe/addRecipeSlice';

const rootReducer = combineReducers({
  userAuth: authReducer,
  addUser: addUserReducer,
  editUser: editUserReducer,
  getOneUser: getOneUserReducer,
  allRecipes: allRecipesReducer,
  addRecipe: addRecipeReducer,
});

export default rootReducer;
