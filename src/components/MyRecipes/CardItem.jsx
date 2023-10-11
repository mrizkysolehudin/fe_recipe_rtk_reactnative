import {Button, Image, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const CardItem = ({
  item,
  handlePress,
  withActionButton,
  handleDelete,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(item?.recipe_id)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 16,
        }}>
        <Image
          style={{width: 80, height: 80, borderRadius: 16}}
          source={{uri: item.image}}
          alt="recipe"
        />
        <View style={{marginTop: 5, marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: 500}}>{item.title}</Text>

          <Text
            style={{
              fontSize: 12,
              color: '#B6B6B6',
              textTransform: 'capitalize',
            }}>
            by {item.creator}
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              textTransform: 'capitalize',
              marginTop: 1,
            }}>
            {item.category_name}
          </Text>
        </View>
      </View>

      {withActionButton && (
        <View style={{gap: 4}}>
          <Button
            onPress={() =>
              navigation.navigate('EditRecipe', {id: item?.recipe_id})
            }
            bgColor="#0284c7"
            py={1}
            fontWeight={'bold'}>
            Edit
          </Button>
          <Button
            onPress={() => handleDelete(item?.recipe_id)}
            bgColor="#dc2626"
            py={1}
            px={2}
            fontWeight={'bold'}>
            Delete
          </Button>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CardItem;
