import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetails from "../screens/ProductDetails";
import ProductsList from "../screens/ProductsList";
import OrderList from "../screens/OrderList";
import OrderDetails from "../screens/OrderDetails";
import ReduxCart from '../components/ReduxCart';
import CartItemsList from '../screens/CartItemsList';

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="ProductsList" component={ProductsList} />
      <Tab.Screen name="OrderList" component={OrderList} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='ProductsList' screenOptions={{headerRight: () => <ReduxCart/>}}>
            <Stack.Screen name="Tabs" component={Tabs} options={{
                title: 'DevParidhan',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="OrderList" component={OrderList} />
              <Stack.Screen name="OrderDetails" component={OrderDetails} />
              <Stack.Screen name="CartItemsList" component={CartItemsList}/>
        </Stack.Navigator>
    )
}

export default AppNavigator