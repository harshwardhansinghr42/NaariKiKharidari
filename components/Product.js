import React, { useState } from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function Product({product, onPress, onLike, likedProducts}) {
  return (
    <View>
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={product.image}
      />
      <View style={styles.infoContainer}>
          <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} onPress={() => onLike(product.id)}>
            <Icon size={24} color="black" name={likedProducts.includes(product.id) ? "heart-sharp" : "heart-outline"}/>
          </TouchableOpacity>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
}
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
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
