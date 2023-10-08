import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Input} from 'native-base';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../assets/style/colors';
import {useNavigation} from '@react-navigation/native';

const SearchInput = ({params}) => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.navigate(`SearchRecipe`, {search: searchTerm});
  };

  useEffect(() => {
    setSearchTerm(params);
  }, []);

  return (
    <View style={{alignItems: 'center', marginTop: 16}}>
      <Input
        w="319"
        h="50"
        borderRadius={10}
        borderColor={'transparent'}
        backgroundColor="#EFEFEF"
        onChangeText={setSearchTerm}
        value={searchTerm}
        onSubmitEditing={handleSearch}
        InputLeftElement={
          <IonIcon
            style={{marginTop: 2, marginLeft: 20}}
            name="search-outline"
            size={16}
            color={colors.primary}
          />
        }
        placeholder="Search Pasta, Bread, etc"
        placeholderTextColor={colors.primary}
      />
    </View>
  );
};

export default SearchInput;
