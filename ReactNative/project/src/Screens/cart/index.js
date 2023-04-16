import React, {useEffect, useState} from 'react';
import {View, FlatList,Text, StyleSheet} from 'react-native';
import {storeCart} from '../../Services/store';
import {CartProducts, CartTotal} from '../../Components';

const Cart = ({navigation}) => {
  const [cartList, setCartList] = useState(null);

  

  const updateList = async () => {
   setCartList(await storeCart.get_cart_list());
  };

  //Нужно изменять cartlist данными с аргументов
  const addAmount = (item,amount) => {
    setCartList(cartList.map((cartItem) => {
      if(cartItem._id === item._id) return {...item, count: amount}
      return cartItem
    }))
    storeCart.update_cart_list(item,amount);
  };


const deleteFromCart = (item) =>{
  setCartList(cartList.filter((cartItem) => item._id !== cartItem._id))
  storeCart.remove_cart_list(item)
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
      <CartTotal items={cartList} />
      <FlatList
        data={cartList}
        horizontal={false}
        renderItem={({item}) => <CartProducts item={item} delitem={deleteFromCart} additem={addAmount}/>}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Cart;
