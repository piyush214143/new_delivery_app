import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import mainStyle from './style';
import {IMAGES} from '../../utils/constants';

const MainScreen = (props) => {
  console.log('navigation',props);

  const handleOrderNow = () => {
    props.navigation.navigate("TabNav");
  };

  return (
    <View style={mainStyle.container}>
      <Image source={IMAGES.background} style={mainStyle.background} />
      <View style={mainStyle.logoContainer}>
        <Image source={IMAGES.logo} style={mainStyle.logo} />
      </View>
      <View style={mainStyle.base}>
        <View style={mainStyle.icon}>
          <Image source={IMAGES.box} style={mainStyle.box}></Image>
        </View>
        <Text style={mainStyle.heading}> Non-Contact {'\n'} Deliveries</Text>
        <Text style={mainStyle.description}>
          When placing an order, select the option{'\n'} “Contactless delivery”
          and the courier will leave your order at the door.
        </Text>
        <TouchableOpacity onPress={handleOrderNow} style={mainStyle.btn1Container}>
          <Text style={mainStyle.btn1}>ORDER NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainStyle.btn2Container}>
          <Text style={mainStyle.btn2}>DISMISS </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
