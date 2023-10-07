import {Image, Text, View} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const CardItemPopularRecipes = ({item, handlePress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(item?.recipe_id)}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Image
          style={{width: 64, height: 64, borderRadius: 16}}
          source={{uri: item.image}}
          alt="recipe"
        />
        <View style={{marginTop: 5, marginLeft: 10}}>
          <Text style={{fontSize: 16}}>{item.title}</Text>

          <Text style={{fontSize: 12, color: '#B6B6B6', marginTop: 8}}>
            salty, savory
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -3,
            }}>
            <MaterialIcon
              style={{
                color: '#FFB200',
                fontSize: 15,
              }}
              name="star"
            />
            <Text style={{fontSize: 12, color: '#B6B6B6', marginLeft: 5}}>
              4.6
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardItemPopularRecipes;
