import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import CategoriesList from '../components/CategoriesList';
const ProductsList = ({ navigation }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  function likeProduct(productId){
    if(likedProducts.includes(productId)){
      setLikedProducts(likedProducts.filter(item => item !== productId));
    }
    else{
      setLikedProducts(likedProducts => [...likedProducts, productId]);
    }
  }
  function renderProduct({item: product}) {
      return (
        <Product product = {product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
        onLike={likeProduct}
        likedProducts={likedProducts}
        />
      );
  }

  return (
    <View>
      <CategoriesList />
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={getProducts()}
        renderItem={renderProduct}
      />
    </View>
  );
}

export default ProductsList

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});