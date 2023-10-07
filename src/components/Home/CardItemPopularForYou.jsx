import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Image} from 'native-base';

const CardItemPopularForYou = ({source, alt, title}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={{alignItems: 'center', paddingRight: 21}}>
        <Image
          style={{width: 64, height: 64, objectFit: 'cover'}}
          source={source}
          alt={alt}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '600',
            marginTop: 5,
          }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardItemPopularForYou;
