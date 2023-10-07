import {FlatList, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import CardItemPopularRecipes from './CardItemPopularRecipes';

const PopularRecipes = ({data, handlePress}) => {
  return (
    <View style={{marginLeft: 28}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'black',
          }}>
          Popular Recipes
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{fontSize: 12, color: '#6D61F2'}}>More Info</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardItemPopularRecipes item={item} handlePress={handlePress} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PopularRecipes;
