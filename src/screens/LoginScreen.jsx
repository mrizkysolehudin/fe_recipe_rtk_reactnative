import React, {useEffect, useState} from 'react';
import {Button, Image, Input, Text, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../assets/style/colors';
import icon_user from '../assets/icons/icon_user.png';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../redux/slices/auth/authSlice';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.userAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let data = {
      email,
      password,
    };

    dispatch(loginAction({data, navigation}));
  };

  useEffect(() => {
    if (token) {
      navigation.navigate('Home');
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <View justifyContent={'center'} flexDirection={'row'}>
        <View
          bgColor={colors.primary}
          width={180}
          height={180}
          rounded={9999}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Image
            source={icon_user}
            alt="icon_user"
            width={' 68.33%'}
            height={' 68.33%'}
          />
        </View>
      </View>

      <View>
        <View mt={4}>
          <Text fontSize={30} textAlign={'center'} color={colors.yellow}>
            Welcome !
          </Text>
          <Text color={colors.primary} textAlign={'center'}>
            Log in to your existing account.
          </Text>
        </View>

        <View px={30} mt={45}>
          <Input
            rounded={10}
            fontSize={12}
            h={60}
            placeholder="Email address"
            borderColor={'transparent'}
            bgColor={'#F5F5F5'}
            placeholderTextColor={colors.primary}
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
            leftElement={
              <FeatherIcon
                name="user"
                size={24}
                color={colors.primary}
                style={{marginLeft: 20}}
              />
            }
          />
          <Input
            rounded={10}
            mt={5}
            h={60}
            fontSize={12}
            borderColor={'transparent'}
            bgColor={'#F5F5F5'}
            placeholder="Password"
            placeholderTextColor={colors.primary}
            autoComplete="off"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            InputLeftElement={
              <FeatherIcon
                name="lock"
                size={24}
                color={colors.primary}
                style={{marginLeft: 20}}
              />
            }
          />
        </View>

        <Text
          color={colors.darkPrimary}
          textAlign={'right'}
          mr={30}
          mt={2}
          mb={5}>
          Forgot Password?
        </Text>
        <Button
          onPress={() => handleLogin()}
          style={{
            backgroundColor: colors.yellow,
            padding: 10,
            marginHorizontal: 30,
            borderRadius: 10,
            marginTop: 10,
          }}>
          LOG IN
        </Button>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text mr={1} color={colors.darkPrimary}>
            Don't have any account?
          </Text>
          <TouchableHighlight
            underlayColor={colors.primary}
            onPress={() => navigation.navigate('Register')}>
            <Text color={colors.yellow}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
