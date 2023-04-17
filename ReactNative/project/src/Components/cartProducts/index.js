import {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import config from '../../Config';

const windowWidth = Dimensions.get('window').width;

export default function CartProducts({item, delitem, additem}) {
  
  const addHandler = () => {
    let amount = !item.count ? 2: item.count + 1
    let price = parseFloat(item.price)
    item['price'] = Math.floor(price + (price / (!item.count ? 1 : item.count)))
    additem(item, amount);
  };

  const delHandler = () => {
    let price = item.price
    item['price'] = Math.floor(price - (price / (!item.count ? 1 : item.count)))
    additem(item, item.count - 1);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <View>
          <Image
            resizeMode="cover"
            style={styles.productImg}
            source={{uri: `${config.public}${item.picture}`}}
          />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <View style={styles.itemFooter}>
          <Text> Цена: 
            {item.price} {item.currency}
          </Text>
          <Button title="+" onPress={() => addHandler()} />
          <Text>Количество: {!item.count ? 1 : item.count}</Text>
          <Button
            disabled={item.count == 1 || !item.count}
            title="-"
            onPress={() => delHandler()}
          />
          <Button title="delete" onPress={() => delitem(item)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemFooter: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImg: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: windowWidth * 0.03,
    color: '#000',
  },
});
