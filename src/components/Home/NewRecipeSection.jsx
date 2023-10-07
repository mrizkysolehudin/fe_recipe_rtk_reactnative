import {Image, ScrollView, Text, View} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native';

const NewRecipeSection = ({data, handlePress}) => {
  return (
    <View style={{marginTop: 30, marginLeft: 28}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: 'black',
        }}>
        New Recipes
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.reverse().map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handlePress(item.recipe_id)}>
              <View style={{paddingRight: 20}}>
                <Image
                  source={{uri: item.image}}
                  alt="recipe"
                  style={{
                    width: 130,
                    height: 160,
                    position: 'relative',
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    top: 100,
                    color: 'white',
                    fontSize: 14,
                    fontWeight: '500',
                    width: 61,
                    left: 10,
                    overflow: 'hidden',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default NewRecipeSection;
