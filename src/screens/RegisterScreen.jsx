import React, {useEffect, useState} from 'react';
import {Button, Input, Text, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../assets/style/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {addUserAction} from '../redux/slices/user/addUserSlice';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.userAuth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (token) {
      navigation.navigate('Home');
    }
  }, [token]);

  const handleSubmit = async () => {
    let data = {
      name,
      email,
      phone,
      password,
      confirmPassword,
    };

    dispatch(addUserAction({data, navigation}));
  };

  return (
    <View style={styles.container}>
      <Text
        color={colors.yellow}
        h={6}
        pt={2}
        mt={-39}
        textAlign={'center'}
        style={{fontSize: 30}}>
        Let's Get Started !
      </Text>
      <Text
        color={colors.darkPrimary}
        textAlign={'center'}
        style={{marginTop: 10}}>
        Create new account to access all features
      </Text>

      <View style={{paddingHorizontal: 28, marginTop: 40, gap: 20}}>
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Name"
          placeholderTextColor={colors.primary}
          autoComplete="name"
          value={name}
          onChangeText={setName}
          InputLeftElement={
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
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="E-Mail"
          placeholderTextColor={colors.primary}
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
          InputLeftElement={
            <FeatherIcon
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
          placeholder="Phone Number"
          placeholderTextColor={colors.primary}
          secureTextEntry={true}
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
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="Create New Password"
          placeholderTextColor={colors.primary}
          autoComplete="password"
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
        <Input
          rounded={10}
          fontSize={12}
          h={60}
          bgColor={'white'}
          borderColor={'transparent'}
          placeholder="New Password"
          placeholderTextColor={colors.primary}
          autoComplete="password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          InputLeftElement={
            <FeatherIcon
              name="unlock"
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
        CREATE
      </Button>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text mr={1} color={colors.darkPrimary}>
          Already have account?
        </Text>
        <TouchableHighlight
          underlayColor={colors.primary}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: colors.yellow}}>Login Here</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
