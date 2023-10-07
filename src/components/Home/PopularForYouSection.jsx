import React from 'react';
import {ScrollView, Text, View} from 'native-base';
import Soup from '../../assets/images/soup.png';
import Meat from '../../assets/images/meat.png';
import Seafood from '../../assets/images/seafood.png';
import CardItemPopularForYou from './CardItemPopularForYou';

const PopularForYouSection = () => {
  return (
    <View style={{marginTop: 30, marginLeft: 28}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: 'black',
          height: 24,
          paddingTop: 3,
          marginBottom: 20,
        }}>
        Popular for you
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardItemPopularForYou source={Soup} alt={'Soup'} title={'Soup'} />
        <CardItemPopularForYou source={Meat} alt={'Meat'} title={'Meat'} />
        <CardItemPopularForYou
          source={Seafood}
          alt={'Seafood'}
          title={'Seafood'}
        />
        <CardItemPopularForYou
          source={Meat}
          alt={'Dessert'}
          title={'Dessert'}
        />
        <CardItemPopularForYou source={Soup} alt={'Soup'} title={'Soup'} />
        <CardItemPopularForYou source={Meat} alt={'Meat'} title={'Meat'} />
      </ScrollView>
    </View>
  );
};

export default PopularForYouSection;
