import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartProduct from "../components/CartProduct";
import { connect } from 'react-redux';
const CartItemsList = ({cartItems}) => {
    var items_counter = {};
    var uniq_items = [];
    uniquifyCartItems();

    function uniquifyCartItems(){
        cartItems.forEach(function (item, index) {
            if (items_counter[item.id] === undefined){
                items_counter[item.id] = 1;
                uniq_items.push(item);
            }
            else {
                items_counter[item.id]++;
            }
          });
    }
    function renderProduct({item: product}) {
        return (
          <CartProduct product = {product} items_counter = {items_counter}/>
        );
    }
    return(

        <View>
            <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={uniq_items}
                renderItem={renderProduct}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.CartItems
    }
}
export default connect(mapStateToProps)(CartItemsList)

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