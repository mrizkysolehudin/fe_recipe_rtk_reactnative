import React, {useEffect, useState} from 'react';
import {Button, Image, Input, Text, TextArea, View} from 'native-base';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../assets/style/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import BottomTabs from '../components/Global/BottomTabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {getOneUserAction} from '../redux/slices/user/getOneUser';
import {editUserAction} from '../redux/slices/user/editUserSlice';

const AddRecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user_id} = useSelector(state => state.userAuth);
  const user = useSelector(state => state.getOneUser.data);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    dispatch(getOneUserAction(user_id));
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setPhoto({
        uri: user.photo,
      });
    }
  }, [user]);

  const handleSubmit = async () => {
    let data = {
      name,
      email,
      phone,
      photo: {
        uri: photo?.uri ?? '',
        type: photo?.type ?? '',
        name: photo?.fileName ?? '',
        fileSize: photo?.fileSize ?? '',
      },
    };

    dispatch(editUserAction({data, navigation}));
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
        setPhoto(data);
      }
    });
  };

  const handleOpenCamera = async () => {
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
        setPhoto(data);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#F8F8FA',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 24,
            borderRadius: 16,
          }}>
          <MaterialIcon name="navigate-before" size={25} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#EEC302',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Edit Profile
          </Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 28, marginTop: 20, gap: 20}}>
        <View style={{position: 'relative'}}>
          <View
            style={{
              height: 100,
              backgroundColor: photo?.uri ? 'transparent' : 'white',
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

          {photo?.uri && (
            <Image
              source={{uri: `${photo?.uri}`}}
              alt="photo-profile"
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
            <Text style={{color: 'white', fontWeight: 900}}>Select Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleOpenCamera}
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

        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Name"
          placeholderTextColor={colors.primary}
          value={name}
          onChangeText={setName}
          InputLeftElement={
            <MaterialIcon
              name="person"
              size={24}
              color={colors.primary}
              style={{marginLeft: 20}}
            />
          }
        />
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Email"
          placeholderTextColor={colors.primary}
          value={email}
          onChangeText={setEmail}
          InputLeftElement={
            <MaterialIcon
              name="mail"
              size={24}
              color={colors.primary}
              style={{marginLeft: 20}}
            />
          }
        />
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Phone"
          placeholderTextColor={colors.primary}
          value={phone}
          onChangeText={setPhone}
          InputLeftElement={
            <FeatherIcon
              name="phone"
              size={24}
              color={colors.primary}
              style={{marginLeft: 20}}
            />
          }
        />
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
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
