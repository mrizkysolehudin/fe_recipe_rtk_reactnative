import {SafeAreaView, SectionList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomTabs from '../components/Global/BottomTabs';
import PopularForYouSection from '../components/Home/PopularForYouSection';
import NewRecipeSection from '../components/Home/NewRecipeSection';
import PopularRecipes from '../components/Home/PopularRecipes';
import SearchInput from '../components/Home/SearchInput';
import {useDispatch, useSelector} from 'react-redux';
import {getAllRecipesAction} from '../redux/slices/recipe/allRecipes';
import {ScrollView, Text, View} from 'native-base';

const HomeScreenTes = ({route, navigation}) => {
  const openTab = route.name || 'Home';
  const dispatch = useDispatch();
  const {data: dataRecipe, isLoading} = useSelector(state => state.allRecipes);
  console.log(dataRecipe);
  console.log('lod', isLoading);

  const [searchTerm, setSearchTerm] = useState('');

  const data = dataRecipe;

  const handlePress = id => {
    navigation.navigate('RecipeDetails', {id});
  };

  useEffect(() => {
    dispatch(getAllRecipesAction(searchTerm));
  }, [dispatch]);

  const sections = [
    {title: 'SearchInput', data: [1]},
    {title: 'PopularForYouSection', data: [2]},
    {title: 'NewRecipeSection', data: [3]},
    {title: 'PopularRecipes', data: [4]},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({section}) => {
          switch (section.title) {
            case 'SearchInput':
              return <SearchInput />;
            case 'PopularForYouSection':
              return <PopularForYouSection />;
            case 'NewRecipeSection':
              return (
                <NewRecipeSection
                  data={data}
                  isLoading={isLoading}
                  handlePress={handlePress}
                />
              );
            case 'PopularRecipes':
              return (
                <PopularRecipes
                  data={data}
                  isLoading={isLoading}
                  handlePress={handlePress}
                />
              );
            default:
              return null;
          }
        }}
      />

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
