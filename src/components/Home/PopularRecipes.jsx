import {FlatList, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import CardItemPopularRecipes from './CardItemPopularRecipes';
import Alert from '../Global/Alert';
import NoResult from '../Global/NoResult';

const PopularRecipes = ({data, handlePress, isLoading}) => {
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

      {isLoading ? (
        <Alert type={'loading'} />
      ) : data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CardItemPopularRecipes item={item} handlePress={handlePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <NoResult />
      )}
    </View>
  );
};

export default PopularRecipes;
