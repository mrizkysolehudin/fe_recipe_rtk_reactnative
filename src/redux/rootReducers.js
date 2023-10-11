import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import addUserReducer from './slices/user/addUserSlice';
import editUserReducer from './slices/user/editUserSlice';
import getOneUserReducer from './slices/user/getOneUser';
import allRecipesReducer from './slices/recipe/allRecipes';
import addRecipeReducer from './slices/recipe/addRecipeSlice';
import editRecipeReducer from './slices/recipe/editRecipeSlice';
import getOneRecipeReducer from './slices/recipe/getOneRecipeSlice';

const rootReducer = combineReducers({
  userAuth: authReducer,
  addUser: addUserReducer,
  editUser: editUserReducer,
  getOneUser: getOneUserReducer,
  allRecipes: allRecipesReducer,
  addRecipe: addRecipeReducer,
  editRecipe: editRecipeReducer,
  getOneRecipe: getOneRecipeReducer,
});

export default rootReducer;
