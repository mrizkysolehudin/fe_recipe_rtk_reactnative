import React, {useEffect, useState} from 'react';
import {Button, Input, Text, TextArea, View} from 'native-base';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../assets/style/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import BottomTabs from '../components/Global/BottomTabs';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddRecipeScreen = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [video, setVideo] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text
        color={colors.yellow}
        h={6}
        pt={2}
        mt={-39}
        textAlign={'center'}
        style={{fontSize: 30}}>
        Add Your Recipe
      </Text>

      <View style={{paddingHorizontal: 28, marginTop: 40, gap: 20}}>
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Title"
          placeholderTextColor={colors.primary}
          value={title}
          onChangeText={setTitle}
          InputLeftElement={
            <FeatherIcon
              name="book-open"
              size={24}
              color={colors.primary}
              style={{marginLeft: 20}}
            />
          }
        />
        <TextArea
          rounded={10}
          fontSize={12}
          h={200}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Ingredients"
          placeholderTextColor={colors.primary}
          value={ingredients}
          onChangeText={setIngredients}
        />
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Add Video"
          placeholderTextColor={colors.primary}
          secureTextEntry={true}
          value={video}
          onChangeText={setVideo}
          InputLeftElement={
            <FeatherIcon
              name="video"
              size={24}
              color={colors.primary}
              style={{marginLeft: 20}}
            />
          }
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 1,
            borderColor: colors.darkPrimary,
            borderWidth: 1,
          }}>
          <Text
            style={{
              paddingVertical: 15,
              textAlign: 'center',
              fontSize: 15,
              color: colors.darkPrimary,
            }}>
            Add Image
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        onPress={() => handleSubmit()}
        style={{
          backgroundColor: colors.yellow,
          padding: 10,
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 40,
        }}>
        POST
      </Button>

      <BottomTabs />
    </SafeAreaView>
  );
};

export default AddRecipeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
