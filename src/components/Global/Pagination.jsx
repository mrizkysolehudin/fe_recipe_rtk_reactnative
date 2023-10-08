import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';
import {colors} from '../../assets/style/colors';

const Pagination = ({pagination, setPage, page}) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (pagination?.totalPage > page) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 150,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button size={16} h={10} bgColor={'gray.500'} onPress={handlePrevious}>
          Previous
        </Button>
        {Array.from({length: pagination.totalPage}).map((_, index) => {
          let pageNumber = index + 1;

          return (
            <Button
              size={10}
              rounded={0}
              bgColor={
                pagination.currentPage === pageNumber
                  ? colors.yellow
                  : 'gray.500'
              }
              borderColor={'gray.200'}
              borderWidth={1}
              h={10}
              key={index}>
              <Text
                style={{
                  color: 'white',
                }}>
                {pageNumber}
              </Text>
            </Button>
          );
        })}

        <Button size={16} h={10} bgColor={'gray.500'} onPress={handleNext}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default Pagination;
