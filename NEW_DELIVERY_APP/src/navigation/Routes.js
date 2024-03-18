import React from 'react';
import { View,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screen/MainScreen';
import Categories from '../screen/Categories';
import Checkout from '../screen/Checkout'; 
import Profile from '../screen/Profile';
import { IMAGES } from '../utils/constants';
import ResponsiveSize from '../utils/responsiveSize';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
  </Stack.Navigator>
);

export const TabNav = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Categories') {
          iconName = focused ? IMAGES.tabCol: IMAGES.tab;
        } if (route.name === 'Checkout') {
          iconName = focused ? IMAGES.shoppingCartCol: IMAGES.shoppingCart;
        } else if (route.name === 'Profile') {
            iconName = IMAGES.user;
        }
          return <Image source={iconName} style={{justifyContent: 'center',marginTop:ResponsiveSize(20), alignSelf:'center'}}/>
      },
    })}
    tabBarOptions={{
      showLabel: false, 
    }}
  >
    <Tab.Screen options={{ headerShown: false }} name="Categories" component={Categories} />
    <Tab.Screen options={{ headerShown: false }} name="Checkout" component={Checkout} />
    <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
  </Tab.Navigator>
);

const Routes = ({ switchToTabs }) => (
  <NavigationContainer>
    <Stack.Navigator>
      {switchToTabs ? (
        <Stack.Screen options={{ headerShown: false }} name="TabNav" component={TabNav} />
      ) : (
        <Stack.Screen options={{ headerShown: false }} name="MainStack" component={MainStack} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
