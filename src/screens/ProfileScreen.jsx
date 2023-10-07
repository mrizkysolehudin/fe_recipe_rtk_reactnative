import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import BottomTabs from '../components/Global/BottomTabs';
import {colors} from '../assets/style/colors';
import {Button} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../redux/slices/auth/authSlice';
import {getOneUserAction} from '../redux/slices/user/getOneUser';

const ProfileScreen = ({route, navigation}) => {
  const openTab = route.name || 'Profile';
  const dispatch = useDispatch();
  const {user_id} = useSelector(state => state.userAuth);
  const {data} = useSelector(state => state.getOneUser);

  useEffect(() => {
    dispatch(getOneUserAction(user_id));
  }, [user_id]);

  return (
    <View style={{position: 'relative', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.yellow,
          height: 376,
          position: 'absolute',
          width: '100%',
        }}>
        <Image
          style={{height: 84, width: 84, borderRadius: 999}}
          source={{uri: `${data?.photo}`}}
          alt="user"
        />
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
            marginTop: 20,
          }}>
          {data?.name}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          height: 500,
          position: 'relative',
          marginTop: 300,
          borderTopStartRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingTop: 20,
            width: '100%',
            position: 'relative',
          }}>
          <FeatherIcon name="user" size={24} color={colors.yellow} />
          <Text style={styles.titleMenuItem}>Edit Profile</Text>
          <MaterialIcon
            style={{
              position: 'absolute',
              right: 35,
              top: 20,
            }}
            name="navigate-next"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyRecipes')}
          style={styles.cardMenuItem}>
          <MaterialIcon name="list" size={24} color={colors.yellow} />
          <Text style={styles.titleMenuItem}>My Recipes</Text>
          <MaterialIcon
            style={{
              position: 'absolute',
              right: 35,
            }}
            name="navigate-next"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SavedRecipe')}
          style={styles.cardMenuItem}>
          <IonIcon name="bookmark-outline" size={24} color={colors.yellow} />
          <Text style={styles.titleMenuItem}>Saved Recipes</Text>
          <MaterialIcon
            style={{
              position: 'absolute',
              right: 35,
            }}
            name="navigate-next"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LikedRecipe')}
          style={styles.cardMenuItem}>
          <AntDesignIcon name="like2" size={24} color={colors.yellow} />
          <Text style={styles.titleMenuItem}>Liked Recipes</Text>
          <MaterialIcon
            style={{
              position: 'absolute',
              right: 35,
            }}
            name="navigate-next"
            size={25}
          />
        </TouchableOpacity>

        <Button
          onPress={() => dispatch(logoutAction())}
          mt={7}
          bgColor={'#f44336'}
          fontWeight={'extrabold'}>
          Logout
        </Button>
      </View>

      <BottomTabs openTab={openTab} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  cardMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 40,
    width: '100%',
    position: 'relative',
  },
  titleMenuItem: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.70)',
    marginLeft: 10,
  },
});
