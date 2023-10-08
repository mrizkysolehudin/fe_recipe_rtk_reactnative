import {SafeAreaView, SectionList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomTabs from '../components/Global/BottomTabs';
import PopularForYouSection from '../components/Home/PopularForYouSection';
import NewRecipeSection from '../components/Home/NewRecipeSection';
import PopularRecipes from '../components/Home/PopularRecipes';
import SearchInput from '../components/Global/SearchInput';
import {useDispatch, useSelector} from 'react-redux';
import {getAllRecipesAction} from '../redux/slices/recipe/allRecipes';
import {Text} from 'native-base';

const HomeScreenTes = ({route}) => {
  const openTab = route.name || 'Home';
  const dispatch = useDispatch();
  const {
    data: dataRecipe,
    isLoading,
    isError,
  } = useSelector(state => state.allRecipes);
  console.log(dataRecipe);

  const [searchTerm, setSearchTerm] = useState('');

  const data = dataRecipe || [];
  const sections = [
    {title: 'SearchInput', data: [1]},
    {title: 'PopularForYouSection', data: [2]},
    {title: 'NewRecipeSection', data: [3]},
    {title: 'PopularRecipes', data: [4]},
  ];

  const handlePress = id => {
    navigation.navigate('RecipeDetails', {id});
  };

  useEffect(() => {
    dispatch(getAllRecipesAction(searchTerm));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <SearchInput />

        <View style={{marginLeft: 28, marginBottom: 10}}>
          <PopularForYouSection />
          {isLoading ? (
            <Text>Please wait a moment...</Text>
          ) : isError ? (
            <Text>Something went wrong.</Text>
          ) : (
            <NewRecipeSection data={data} />
          )}
          <PopularRecipes data={data} />
        </View>
      </ScrollView>

      <BottomTabs openTab={openTab} />
    </SafeAreaView>
  );
};

export default HomeScreenTes;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
});
