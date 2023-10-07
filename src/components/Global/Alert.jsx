import {View, Text} from 'react-native';
import React from 'react';

const Alert = ({type = 'loading'}) => {
  if (type === 'loading')
    return (
      <View>
        <Text>Please wait a moment...</Text>
      </View>
    );

  if (type === 'error')
    return (
      <View>
        <Text>Something went wrong...</Text>
      </View>
    );
};

export default Alert;
