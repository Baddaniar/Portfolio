import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeFavorite } from '../../Services/store';
import { FAVORITE_LIST } from '../../Services/store/storeKeys';

const Favorites = ({navigation}) => {

  const [favoritesList, setFavoritesList] = useState(null);

  const updateList = async () => {
    setFavoritesList(await storeFavorite.get_favorite_list());
  };

  const clearFavorites = async ()=>{
    await AsyncStorage.removeItem(FAVORITE_LIST)
    updateList()
  }

  useEffect(() => {
    updateList();
    const unsubscribe = navigation.addListener('tabPress', e => {
      updateList();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View>
      <Button title='Clear'onPress={clearFavorites}/>
      <FlatList
        data={favoritesList}
        numColumns={2}
        columnWrapperStyle={styles.listWraper}
        horizontal={false}
        renderItem={({item}) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Favorites;
