import React, {useState} from 'react';
import {Button, Image, Input, Text, TextArea, View} from 'native-base';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../assets/style/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import BottomTabs from '../components/Global/BottomTabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {addRecipeAction} from '../redux/slices/recipe/addRecipeSlice';
import {useDispatch} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Video from 'react-native-video';

const AddRecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    let data = {
      title,
      ingredients,
      video: !video.uri
        ? video
        : {
            uri: video?.uri ?? '',
            type: video?.type ?? '',
            name: video?.fileName ?? '',
            fileSize: video?.fileSize ?? '',
          },
      image: {
        uri: image?.uri ?? '',
        type: image?.type ?? '',
        name: image?.fileName ?? '',
        fileSize: image?.fileSize ?? '',
      },
    };

    dispatch(addRecipeAction({data, navigation}));
  };

  const handleOpenGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user cancelled');
      } else if (response.error) {
        console.log('launchImageLibrary Error: ', response.error);
      } else {
        const data = response.assets[0];
        console.log(data);
        setImage(data);
      }
    });
  };

  const handleOpenCameraPhoto = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled');
      } else if (response.error) {
        console.log('launchCamera Error: ', response.error);
      } else {
        const data = response.assets[0];
        console.log(data);
        setImage(data);
      }
    });
  };

  const handleOpenCameraVideo = async () => {
    const options = {
      mediaType: 'video',
      includeBase64: false,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled');
      } else if (response.error) {
        console.log('launchCamera Error: ', response.error);
      } else {
        const data = response.assets[0];
        console.log('dataaaaaa', data);
        setVideo(data);
      }
    });
  };

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
          h={100}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Ingredients"
          placeholderTextColor={colors.primary}
          value={ingredients}
          onChangeText={setIngredients}
        />

        {video?.uri ? (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              flexDirection: 'row',
            }}>
            <Video
              source={{uri: video?.uri}}
              style={{
                width: '100%',
                height: 100,
              }}
              controls={true}
              resizeMode="contain"
            />

            <Button
              bgColor={'red.600'}
              py={1}
              onPress={() => setVideo('')}
              style={{position: 'absolute', right: 20, top: 0}}>
              X
            </Button>
          </View>
        ) : (
          <Input
            rounded={10}
            fontSize={12}
            h={60}
            bgColor={'white'}
            borderColor={'transparent'}
            placeholder="Add Link Youtube"
            placeholderTextColor={colors.primary}
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
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleOpenCameraVideo}
          style={{
            backgroundColor: colors.grayishBlue,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
            paddingVertical: 10,
            width: '15%',
            alignSelf: 'center',
            marginTop: -10,
          }}>
          <MaterialIcon name="video-camera-back" size={20} color={'white'} />
        </TouchableOpacity>

        <View style={{position: 'relative'}}>
          <View
            style={{
              height: 100,
              backgroundColor: image?.uri ? 'transparent' : 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon
              name="insert-photo"
              size={20}
              color={colors.primary}
            />
            <Text style={{color: colors.darkPrimary}}>Add Photo</Text>
          </View>

          {image?.uri && (
            <Image
              source={{uri: `${image?.uri}`}}
              alt="recipe"
              width={'100%'}
              height={'100%'}
              style={{position: 'absolute', objectFit: 'contain'}}
            />
          )}

          <TouchableOpacity
            onPress={handleOpenGallery}
            style={{
              position: 'absolute',
              height: 100,
              borderRadius: 10,
              bottom: 0,
              width: '100%',
            }}></TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            gap: 20,
            marginTop: -10,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleOpenGallery}
            style={{
              backgroundColor: colors.grayishBlue,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
              paddingVertical: 10,
              marginLeft: '10%',
            }}>
            <Text style={{color: 'white', fontWeight: 900}}>Select Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleOpenCameraPhoto}
            style={{
              backgroundColor: colors.grayishBlue,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
              paddingVertical: 10,
              marginLeft: '10%',
            }}>
            <MaterialIcon name="photo-camera" size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>

      <Button
        onPress={() => handleSubmit()}
        style={{
          backgroundColor: colors.yellow,
          padding: 10,
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 20,
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
