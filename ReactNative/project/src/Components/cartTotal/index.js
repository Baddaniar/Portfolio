import {View, StyleSheet, Text, Dimensions, Image} from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default function CartTotal({items}){
  const total = !items ? 0 : items.reduce((collector, item) => collector + ((item.price / (!item.count ? 1 : item.count)) * (!item.count ? 1 : item.count)), 0)

  return(
    <View>
        <Text>
            Товаров: {items ? items.length: 0}
        </Text>
        <Text>
            Итого: {total} $
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    flex:1,
  },
  itemContent:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  itemFooter:{
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productImg: {
    height: 200,
    width: '100%'
  },
  title: {
    fontSize: windowWidth * .03,
    color: '#000'
  },
});