import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeBaseProvider, TextArea} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {dataRecipeDetails} from '../dummy/detailResep';
import {colors} from '../assets/style/colors';

const RecipeDetailsScreen = ({route}) => {
  const id = route?.params?.id || 1;
  console.log(id);
  const [activeTab, setActiveTab] = useState('ingredients');

  const data = dataRecipeDetails.data;

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {data.map((item, index) => (
          <View key={index}>
            <View
              style={{
                position: 'relative',
              }}>
              <View>
                <Image
                  style={{width: '100%', height: 442}}
                  source={{uri: item.image}}
                  alt="recipe"
                  resizeMode="cover"
                />
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}>
                <FeatherIcon style={styles.buttonBookmark} name="bookmark" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}>
                <FeatherIcon style={styles.buttonLike} name="thumbs-up" />
              </TouchableOpacity>

              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.creatorName}>By Chef Ronald Humson</Text>
              <View
                style={{
                  width: '100%',
                  height: 380,
                  backgroundColor: 'white',
                  marginTop: -100,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}></View>
              <View style={styles.tabsContainer}>
                <TouchableOpacity
                  onPress={() => setActiveTab('ingredients')}
                  style={[
                    styles.buttonTabs,
                    activeTab === 'ingredients' && styles.activeTab,
                  ]}>
                  <Text
                    style={[
                      styles.tabName,
                      {
                        color:
                          activeTab === 'ingredients' ? 'black' : '#666666',
                      },
                    ]}>
                    Ingredients
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab('videoStep')}
                  style={[
                    styles.buttonTabs,
                    activeTab === 'videoStep' && styles.activeTab,
                  ]}>
                  <Text
                    style={[
                      styles.tabName,
                      {
                        color: activeTab === 'videoStep' ? 'black' : '#666666',
                      },
                    ]}>
                    Video Step
                  </Text>
                </TouchableOpacity>
              </View>
              {activeTab === 'ingredients' && (
                <View style={styles.tabContentIngredients}>
                  <View style={styles.recipeIngredients}>
                    <Text style={{padding: 20, fontSize: 14, color: '#666666'}}>
                      {item.ingredients}
                    </Text>
                  </View>
                </View>
              )}

              {activeTab === 'videoStep' && (
                <View style={styles.tabContentVideoStep}>
                  <TouchableOpacity style={styles.buttonVideoStep}>
                    <View style={styles.iconPlay}>
                      <FeatherIcon
                        style={{
                          color: 'white',
                          fontSize: 24,
                        }}
                        name="play"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.grayB6,
                        marginTop: 10,
                      }}>
                      Step 1
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonVideoStep}>
                    <View style={styles.iconPlay}>
                      <FeatherIcon
                        style={{
                          color: 'white',
                          fontSize: 24,
                        }}
                        name="play"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.grayB6,
                        marginTop: 10,
                      }}>
                      Step 2
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonVideoStep}>
                    <View style={styles.iconPlay}>
                      <FeatherIcon
                        style={{
                          color: 'white',
                          fontSize: 24,
                        }}
                        name="play"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.grayB6,
                        marginTop: 10,
                      }}>
                      Step 3
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonVideoStep}>
                    <View style={styles.iconPlay}>
                      <FeatherIcon
                        style={{
                          color: 'white',
                          fontSize: 24,
                        }}
                        name="play"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.grayB6,
                        marginTop: 10,
                      }}>
                      Step 4
                    </Text>
                  </TouchableOpacity>
                  <NativeBaseProvider>
                    <TextArea
                      h="150"
                      placeholder="Comments"
                      placeholderTextColor={colors.grayB6}
                      w="319"
                      borderRadius={10}
                      borderBottomWidth={1}
                      borderColor="transparent"
                      backgroundColor="#FAF7ED"
                    />
                    <TouchableOpacity
                      style={{
                        height: 40,
                        marginTop: 20,
                        backgroundColor: colors.yellow,
                        borderRadius: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        Post Comment
                      </Text>
                    </TouchableOpacity>
                  </NativeBaseProvider>

                  <View style={{marginTop: 20}}>
                    <Text>Comment :</Text>
                    <ScrollView>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 20,
                        }}>
                        <Image
                          style={{
                            width: 42,
                            height: 42,
                            marginRight: 20,
                            borderRadius: 27,
                          }}
                          source={{
                            uri: 'https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png',
                          }}
                        />
                        <View style={{width: 250, height: 'auto'}}>
                          <Text style={{fontWeight: 'bold'}}>Ayudia</Text>
                          <Text>
                            Nice recipe. simple and delicious, thankyou
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  recipeTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 32,
    top: 200,
    left: 20,
    width: 149,
    height: 84,
  },
  creatorName: {
    position: 'absolute',
    top: 300,
    left: 20,
    color: '#B0B0B0',
  },
  buttonBookmark: {
    position: 'absolute',
    color: 'white',
    backgroundColor: '#EEC302',
    top: 280,
    right: 70,
    fontSize: 24,
    width: 36,
    height: 36,
    borderRadius: 50,
    textAlign: 'center',
    padding: 5,
  },
  buttonLike: {
    position: 'absolute',
    color: '#EEC302',
    backgroundColor: 'white',
    top: 280,
    right: 20,
    fontSize: 24,
    width: 36,
    height: 36,
    borderRadius: 50,
    textAlign: 'center',
    padding: 4,
  },

  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: -370,
    width: '65%',
    paddingLeft: 28,
  },
  buttonTabs: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  activeTab: {
    borderBottomColor: '#EEC302',
    borderBottomWidth: 1,
  },
  tabName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContentIngredients: {
    alignItems: 'center',
    paddingTop: 20,
    minHeight: 420,
  },
  tabContentVideoStep: {
    alignItems: 'center',
    paddingTop: 20,
    height: 'auto',
    paddingBottom: 38,
  },

  recipeIngredients: {
    width: 319,
    height: 'auto',
    backgroundColor: '#FAF7ED',
  },
  buttonVideoStep: {
    backgroundColor: '#FAF7ED',
    width: 319,
    height: 'auto',
    padding: 12,
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 15,
  },
  iconPlay: {
    backgroundColor: '#EEC302',
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 30,
  },
});
