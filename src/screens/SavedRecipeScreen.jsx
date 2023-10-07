import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {dataRecipes} from '../dummy/recipes';
import CardItem from '../components/Global/CardItem';

const SavedRecipeScreen = ({navigation}) => {
  const data = dataRecipes.data;

  const handlePress = id => {
    navigation.navigate('RecipeDetails', {id});
  };

  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 73,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{
          width: 48,
          height: 48,
          backgroundColor: '#F8F8FA',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 24,
          top: 26,
          borderRadius: 16,
        }}>
        <MaterialIcon name="navigate-before" size={25} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 27,
        }}>
        <Text
          style={{
            color: '#EEC302',
            fontSize: 18,
            fontWeight: '500',
          }}>
          Saved Recipe
        </Text>
      </View>

      <View
        style={{
          width: '86%',
        }}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CardItem item={item} handlePress={handlePress} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<View style={{height: 30}} />}
        />
      </View>
    </View>
  );
};

export default SavedRecipeScreen;
