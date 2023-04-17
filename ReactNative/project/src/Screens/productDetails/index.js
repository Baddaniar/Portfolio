import {useState} from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {productsGQL} from '../../Services/gqls';
import actionProducts from './actions';
const ProductDetails = ({navigation, route}) => {
  const [productData, setProducData] = useState(route.params?.item);

  const putProduct = data => {
    setProducData(data.product);
  };

  const [cartStatus, setCatrtStatus] = useState(false);
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  const putInCart = async () => {
    if (!cartStatus && !item.inCart) {
      setCatrtStatus(true);
      await storeCart.set_cart_list(item);
    }
  };

  const addToFavorites = async () => {
    setFavoriteStatus(true);
    await storeFavorite.set_favorite(item);
  };

  useQuery(
    productsGQL.getProduct,
    actionProducts.getProduct(putProduct, route.params?.item?._id),
  );

  return (
    <View>
      <Text>Screen2 {`${productData?.title}`} </Text>
      <View>
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <Image
              resizeMode="cover"
              style={styles.productImg}
              source={{uri: `${config.public}${productData.picture}`}}
            />
            <Text style={styles.title} numberOfLines={2}>
              {productData.title}
            </Text>
          </View>
          <View style={styles.itemFooter}>
            <Text>
              {productData.price} {productData.currency}
            </Text>
            <TouchableOpacity onPress={putInCart}>
              <MaterialCommunityIcons
                name={
                  cartStatus || item.inCart ? 'cart-check' : 'cart-arrow-down'
                }
                size={23}
                color={constans.colors.mainColor}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={addToFavorites}>
              <MaterialCommunityIcons
                name={favoriteStatus ? 'heart' : 'heart_outline'}
                size={23}
                color={constans.colors.mainColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

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
export default ProductDetails;
