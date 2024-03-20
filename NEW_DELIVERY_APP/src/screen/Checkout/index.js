import React from 'react';
import {Image, View, Text} from 'react-native';
import checkoutStyle from './style';
import {IMAGES} from '../../utils/constants';

const Checkout = () => {
  return (
    <View style={checkoutStyle.container}>
      <View style={checkoutStyle.checkoutHeader}>
        <Image source={IMAGES.arrow} style={checkoutStyle.arrow} />
        <Text style={checkoutStyle.checkoutText}>Checkout</Text>
        <Text></Text>
      </View>
      <View style={checkoutStyle.checkoutContainer}>
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Payment method</Text>
          <Text style={checkoutStyle.change}>CHANGE</Text>
        </View>
        <View style={checkoutStyle.cardDetails}>
          <Image source={IMAGES.creditCard}/>
          <Text style={checkoutStyle.DetailsText}>**** **** **** 4747</Text>
        </View >
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Delivery address</Text>
          <Text style={checkoutStyle.change}>CHANGE</Text>
        </View>
        <View style={checkoutStyle.cardDetails}>
          <Image source={IMAGES.home} />
          <Text style={checkoutStyle.DetailsText}>
            Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV-1012 Latvia
          </Text>
        </View>
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Delivery options</Text>
          <Text style={checkoutStyle.change}>CHANGE</Text>
        </View>
        <View style={checkoutStyle.delievery}>
          <View style={checkoutStyle.cardDetails}>
            <Image source={IMAGES.walk}/>
            <Text style={checkoutStyle.DetailsText}>I'll pick it up myself</Text>
          </View>
          <View style={checkoutStyle.cardDetails}>
          <Image source={IMAGES.cycle}/>
            <Text style={checkoutStyle.DetailsText}>By courier</Text>
          </View>
          <View style={checkoutStyle.cardDetails}>
          <Image source={IMAGES.drone}/>
            <Text style={checkoutStyle.DetailsText}>By Drone</Text>
          </View>
        </View>
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Non-contact-delivery</Text>
          <Text ></Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
