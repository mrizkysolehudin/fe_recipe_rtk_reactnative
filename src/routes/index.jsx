import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import MyRecipesScreen from '../screens/MyRecipesScreen';
import SavedRecipeScreen from '../screens/SavedRecipeScreen';
import LikedRecipeScreen from '../screens/LikedRecipe';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyRecipes"
          component={MyRecipesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SavedRecipe"
          component={SavedRecipeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LikedRecipe"
          component={LikedRecipeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
