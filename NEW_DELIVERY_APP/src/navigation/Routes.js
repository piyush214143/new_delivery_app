import React from 'react';
import {Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/MainScreen';
import Categories from '../screen/Categories';
import Checkout from '../screen/Checkout';
import Profile from '../screen/Profile';
import {COLORS, IMAGES} from '../utils/constants';
import Card from '../screen/Card';
import ItemProduct from '../screen/Item';
import Payment from '../screen/Payment';
import ResponsiveSize from '../utils/responsiveSize';

const CustomTabBarBadge = ({image}) => {
  return (
    <View>
      <Image source={image} style={{width: ResponsiveSize(20), height: ResponsiveSize(20)}} />
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNav = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Categories') {
          iconName = focused ? IMAGES.tabCol : IMAGES.tab;
        }
        if (route.name === 'Checkout') {
          iconName = focused ? IMAGES.shoppingCartCol : IMAGES.shoppingCart;
        } else if (route.name === 'Profile') {
          iconName = IMAGES.user;
        }
        return (
          <Image
            source={iconName}
            style={{justifyContent: 'center', alignSelf: 'center'}}
          />
        );
      },
      tabBarShowLabel: false,
    })}>
    <Tab.Screen
      options={{headerShown: false}}
      name="Categories"
      component={Categories}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarBadge: <CustomTabBarBadge image={IMAGES.tabBarBadge} />,
        tabBarBadgeStyle: {backgroundColor: COLORS.white},
      }}
      name="Checkout"
      component={Checkout}
    />

    <Tab.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNav"
        component={TabNav}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Card"
        component={Card}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ItemProduct"
        component={ItemProduct}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Payment"
        component={Payment}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
