import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screen/MainScreen';

const Stack = createNativeStackNavigator();

const Routes =()=> {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Routes;