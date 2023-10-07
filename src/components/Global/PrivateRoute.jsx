import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {token} = useSelector(state => state.userAuth);
  const navigation = useNavigation();

  if (!token) {
    navigation.navigate('Login');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
