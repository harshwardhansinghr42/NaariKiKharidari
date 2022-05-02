import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
const ReduxCart = ({cartItems}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={ () => {
            navigation.navigate('CartItemsList');
        }}>
            <View>
                <Text>Cart {cartItems.length}</Text>
            </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.CartItems
    }
}
export default connect(mapStateToProps)(ReduxCart)
