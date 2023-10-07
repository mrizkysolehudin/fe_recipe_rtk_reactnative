import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../assets/style/colors';
import {useNavigation, useRoute} from '@react-navigation/native';

const BottomTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const openTab = route.name || 'Home';

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={[
            styles.icon,
            {
              backgroundColor: openTab === 'Home' ? colors.yellow : 'white',
            },
          ]}
          onPress={() => {
            // setOpenTab('Home');
            navigation.navigate('Home');
          }}>
          <FeatherIcon
            name="home"
            color={openTab === 'Home' ? 'white' : colors.grayishBlue}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.icon,
            {
              backgroundColor:
                openTab === 'AddRecipe' ? colors.yellow : 'white',
            },
          ]}
          onPress={() => {
            // setOpenTab('AddRecipe');
            // navigation.navigate('AddRecipe');
          }}>
          <FeatherIcon
            name="plus-square"
            color={openTab === 'AddRecipe' ? 'white' : colors.grayishBlue}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.icon,
            {
              backgroundColor: openTab === 'Chat' ? colors.yellow : 'white',
            },
          ]}
          onPress={() => {
            // setOpenTab('Chat');
            // navigation.navigate('Chat');
          }}>
          <IonIcon
            name="chatbubble-outline"
            color={openTab === 'Chat' ? 'white' : colors.grayishBlue}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.icon,
            {
              backgroundColor: openTab === 'Profile' ? colors.yellow : 'white',
            },
          ]}
          onPress={() => {
            // setOpenTab('Profile');
            navigation.navigate('Profile');
          }}>
          <FeatherIcon
            name="user"
            color={openTab === 'Profile' ? 'white' : colors.grayishBlue}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  icon: {
    width: 97,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
