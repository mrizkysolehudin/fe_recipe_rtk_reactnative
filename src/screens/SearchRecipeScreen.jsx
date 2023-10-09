import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NoResult from '../components/Global/NoResult';
import SearchInput from '../components/Global/SearchInput';
import BottomTabs from '../components/Global/BottomTabs';
import http from '../helpers/http';
import {REACT_NATIVE_BACKEND_URL} from '../../env';
import Alert from '../components/Global/Alert';
import CardItemPopularRecipes from '../components/Home/CardItemPopularRecipes';
import {Button, FlatList} from 'native-base';
import Pagination from '../components/Global/Pagination';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchRecipeScreen = ({route, navigation}) => {
  const search = route?.params?.search || '';

  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const limit = 5;
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    getSearchData(search, sort, page, limit);
  }, [sort, page, search]);

  const getSearchData = async (search, sort, page, limit) => {
    setIsLoading(true);

    http()
      .get(
        `${REACT_NATIVE_BACKEND_URL}/recipe?search=${search}&sort=${sort}&page=${page}&limit=${limit}`,
      )
      .then(response => {
        setSearchData(response.data.data);
        setPagination(response.data.pagination);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const handlePress = id => {
    navigation.navigate('RecipeDetails', {id});
  };

  return (
    <View
      style={{
        height: '100%',
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <SearchInput params={search} />

      {sort === 'ASC' ? (
        <Button
          onPress={() => setSort('DESC')}
          mt={5}
          w={16}
          marginLeft={'70%'}>
          <MaterialCommunityIcon
            name="filter-variant"
            size={20}
            color={'white'}
            style={{transform: [{rotate: `180deg`}]}}
          />
        </Button>
      ) : (
        <Button onPress={() => setSort('ASC')} mt={5} w={16} marginLeft={'70%'}>
          <MaterialCommunityIcon
            name="filter-variant"
            size={20}
            color={'white'}
          />
        </Button>
      )}

      <View
        style={{
          paddingLeft: 28,
          minHeight: '58%',
        }}>
        {isLoading ? (
          <Alert type={'loading'} />
        ) : searchData?.length > 0 ? (
          <FlatList
            data={searchData}
            renderItem={({item}) => (
              <CardItemPopularRecipes item={item} handlePress={handlePress} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <NoResult />
        )}
      </View>
      {searchData?.length > 0 && (
        <View>
          <Pagination pagination={pagination} setPage={setPage} page={page} />
        </View>
      )}
      <BottomTabs />
    </View>
  );
};

export default SearchRecipeScreen;
