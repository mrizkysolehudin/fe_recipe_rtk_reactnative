import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CardItem from '../components/MyRecipes/CardItem';
import {useDispatch, useSelector} from 'react-redux';
import NoResult from '../components/Global/NoResult';
import Alert from '../components/Global/Alert';
import {REACT_NATIVE_BACKEND_URL} from '../../env';
import http from '../helpers/http';
import {deleteRecipeAction} from '../redux/slices/recipe/deleteRecipe';

const MyRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user_id} = useSelector(state => state.userAuth);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataUserRecipes, setDataUserRecipes] = useState([]);

  const handlePress = id => {
    navigation.navigate('RecipeDetails', {id});
  };

  useEffect(() => {
    getUserRecipes(user_id);
  }, [user_id, dispatch]);

  const getUserRecipes = async id => {
    setIsLoading(true);

    try {
      const response = await http().get(
        `${REACT_NATIVE_BACKEND_URL}/recipe/user-recipes/${id}`,
      );

      setDataUserRecipes(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleDelete = async recipeId => {
    dispatch(
      deleteRecipeAction({id: recipeId, onRefresh: getUserRecipes, user_id}),
    );
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
          My Recipe
        </Text>
      </View>

      <View
        style={{
          width: '86%',
        }}>
        {isLoading ? (
          <Alert type="loading" />
        ) : isError ? (
          <Alert type="error" />
        ) : dataUserRecipes?.length > 0 ? (
          <FlatList
            data={dataUserRecipes}
            renderItem={({item}) => (
              <CardItem
                item={item}
                handlePress={handlePress}
                withActionButton
                handleDelete={handleDelete}
                navigation={navigation}
              />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={<View style={{height: 30}} />}
          />
        ) : (
          <NoResult />
        )}
      </View>
    </View>
  );
};

export default MyRecipesScreen;
