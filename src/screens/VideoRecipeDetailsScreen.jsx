import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {getOneRecipeAction} from '../redux/slices/recipe/getOneRecipeSlice';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import {Button, FlatList, Image, ScrollView} from 'native-base';
import VideoYouTube from 'react-native-youtube-iframe';
import {formatDate} from '../utils/formatDate';
import NoResult from '../components/Global/NoResult';

const VideoRecipeDetailsScreen = ({route, navigation}) => {
  const id = route?.params?.id || 1;
  const dispatch = useDispatch();
  console.log(id);

  const recipe = useSelector(state => state.getOneRecipe.data);
  const AllRecipes = useSelector(state => state.allRecipes.data);
  console.log(recipe);

  useEffect(() => {
    dispatch(getOneRecipeAction(id));
  }, []);

  return (
    <ScrollView>
      <View style={{marginTop: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipeDetails', {id})}
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
            Video Details
          </Text>
        </View>
      </View>

      <View style={styles.wrapVideo}>
        {recipe?.video &&
        recipe?.video?.startsWith('https://youtube.com/embed') ? (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <VideoYouTube
              videoId={recipe.video.replace('https://youtube.com/embed/', '')}
              height={230}
              width="100%"
            />

            <Text
              style={{
                fontSize: 18,
                marginLeft: 28,
                marginTop: 20,
                color: 'black',
                fontWeight: 500,
              }}>
              {recipe?.title}
            </Text>

            <Text
              style={{
                fontSize: 12,
                marginLeft: 28,
                fontWeight: 500,
                color: '#aaa',
              }}>
              {formatDate(recipe?.created_at)}
            </Text>
          </View>
        ) : recipe?.video?.startsWith('https://res') ? (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              flexDirection: 'row',
            }}>
            <Video
              source={{uri: recipe?.video}}
              style={{
                width: '100%',
                height: 100,
              }}
              controls={true}
              resizeMode="contain"
            />

            <Text
              style={{
                fontSize: 18,
                marginLeft: 28,
                marginTop: 20,
                color: 'black',
                fontWeight: 500,
              }}>
              {recipe?.title}
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              paddingTop: 80,
            }}>
            <NoResult text="No Video" />
          </View>
        )}
      </View>

      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
          Other Recipes
        </Text>

        <View style={{gap: 20, marginTop: 10, marginBottom: 20}}>
          {AllRecipes.length > 0
            ? AllRecipes?.slice(0, 3)?.map((item, index) => (
                <CardItem item={item} />
              ))
            : ''}
        </View>
      </View>
    </ScrollView>
  );
};

export default VideoRecipeDetailsScreen;

const CardItem = ({item}) => {
  return (
    <View>
      <Image
        style={{
          width: 236,
          height: 120,
          borderRadius: 5,
          objectFit: 'cover',
        }}
        source={{uri: item?.image}}
        alt="other recipes"
      />

      <Text style={{fontSize: 12, fontWeight: 500, marginTop: 14}}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 8, fontWeight: 500, color: '#aaa'}}>
          {item.creator} -{' '}
        </Text>
        <Text style={{fontSize: 8, fontWeight: 500, color: '#aaa'}}>
          {formatDate(item.created_at)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    color: '#F5F5F5',
    fontSize: 24,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  wrapVideo: {
    marginTop: 10,
    minHeight: 320,
  },
  wrapTitle: {
    padding: 28,
    marginTop: -70,
  },
});
