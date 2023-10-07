import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const EditProfileScreen = ({navigation}) => {
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 73,
      }}>
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
          top: 26,
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
          marginTop: 27,
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

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '94%',
          marginTop: 5,
        }}>
        <View>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              borderBottomWidth: 0.2,
              borderBottomColor: ' #E7E7E7',
            }}>
            <Text style={{fontSize: 14}}>Change Profile Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              borderBottomWidth: 0.2,
              borderBottomColor: ' #E7E7E7',
            }}>
            <Text style={{fontSize: 14}}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: 319}}>
          <View>
            <TouchableOpacity
              style={{
                height: 40,
                backgroundColor: '#E7E7E7',
                justifyContent: 'center',
                borderTopStartRadius: 15,
                borderTopEndRadius: 15,
              }}>
              <Text style={{textAlign: 'center', fontSize: 14}}>
                Photo Library
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                backgroundColor: '#E7E7E7',
                justifyContent: 'center',
                borderBottomStartRadius: 15,
                borderBottomEndRadius: 15,
              }}>
              <Text style={{textAlign: 'center', fontSize: 14}}>
                Take Photo
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: '#E7E7E7',
              justifyContent: 'center',
              borderRadius: 15,
              marginTop: 20,
            }}>
            <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 500}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
