import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {dataRecipes} from '../dummy/recipes';
import BottomTabs from '../components/Global/BottomTabs';
import {View} from 'native-base';
import PopularForYouSection from '../components/Home/PopularForYouSection';
import NewRecipeSection from '../components/Home/NewRecipeSection';
import PopularRecipes from '../components/Home/PopularRecipes';
import SearchInput from '../components/Home/SearchInput';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreenTes = ({route}) => {
  const openTab = route.name || 'Home';

  const data = dataRecipes.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <SearchInput />

        <View style={{marginLeft: 28, marginBottom: 10}}>
          <PopularForYouSection />
          <NewRecipeSection data={data} />
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
