import {View, Text} from 'react-native';
import React from 'react';

const NoResult = ({text = 'No Recipe', color = 'black'}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
      }}>
      <Text style={{color: color, fontSize: 20}}>{text}</Text>
    </View>
  );
};

export default NoResult;
