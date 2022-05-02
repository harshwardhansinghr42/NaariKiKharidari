import * as React from 'react';
import { Button } from 'react-native';
export default function OrderList({ navigation }) {
    return (
        <Button 
        onPress={() => {
          navigation.navigate('OrderDetails');
        }}
        title="Order Details"
        />
    )
}