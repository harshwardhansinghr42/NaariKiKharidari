import React, { useState, useCallback, useRef } from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

const ProductDetails = ({ route, addItemToCart }) => {
  var product = getProduct(route.params["productId"]);

  const exampleItems = [
    {
      image: require('../assets/images/poshak1.jpeg')
    },
    {
      image: require('../assets/images/poshak2.jpeg')
    },
    {
      image: require('../assets/images/poshak3.jpeg')
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Image
        style={styles.image}
        source={item.image}
      />
    </View>
  ), []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel
          layout={"default"}
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem = {(index) => setActiveIndex(index)} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
            <Button onPress={()=> addItemToCart(product)}
            title="Add to cart"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart:(product) => dispatch({type: 'ADD_TO_CART', payload: product})
  }
}
export default connect(null,mapDispatchToProps)(ProductDetails)

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
  image: {
    height: 300,
    width: '100%'
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
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});






