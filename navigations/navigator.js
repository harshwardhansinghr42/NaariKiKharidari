import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';
import { useSelector } from 'react-redux';
const AppRoute = () => {
    const myToken = useSelector(state => state.AuthToken)
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                myToken.loggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute