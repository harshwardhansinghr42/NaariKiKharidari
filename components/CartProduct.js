import React, {useState} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const CartProduct = ({product, items_counter, updateItemInCart}) => {
  const [value, setValue] = useState(items_counter[product.id]);
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image
          style={styles.thumb}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
      </View>
      <View style={{marginLeft: 30, marginTop: 30 }}>
        <TouchableOpacity onPress={incrementItem}>
          <Icon size={40} name="plus-circle" />
        </TouchableOpacity>
        <Text fontSize={80}>{value}</Text>
        <TouchableOpacity onPress={decrementItem}>
          <Icon size={40} name="minus-circle" />
        </TouchableOpacity>
      </View>
    </View>
  );

  function incrementItem(){
    setValue(value+1)
    updateItemInCart(product, 'add')
  }
  
  function decrementItem(){
    setValue(value-1)
    updateItemInCart(product, 'remove')
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateItemInCart:(product, operation) => dispatch({type: operation === 'add' ? 'ADD_TO_CART' : 'REMOVE_FROM_CART', payload: product})
    }
}

export default connect(null,mapDispatchToProps)(CartProduct)

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
});
