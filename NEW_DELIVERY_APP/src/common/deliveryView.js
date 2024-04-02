import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS,IMAGES } from '../utils/constants';
import checkoutStyle from '../screen/Checkout/style';
import ResponsiveSize from '../utils/responsiveSize';

const DeliveryOptionsComponent = ({ selectedOption, setSelectedOption }) => {
  return (
   <View>
          <View style={checkoutStyle.DeliveryOptions}>
            <Text style={checkoutStyle.optionText}>Delivery options</Text>
            <Text style={checkoutStyle.change}>CHANGE</Text>
          </View>
          <View style={checkoutStyle.delivery}>
            <TouchableOpacity
              style={checkoutStyle.cardDetails}
              onPress={() => setSelectedOption("I'll pick it up myself")}>
              <Image source={IMAGES.walk} />
              <Text
                style={[
                  checkoutStyle.DetailsText,
                  selectedOption === "I'll pick it up myself" && {
                    color: COLORS.change,
                  },
                ]}>
                I'll pick it up myself
              </Text>
              <View style={{flex: 1}} />
              {selectedOption === "I'll pick it up myself" && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
            <View style={{height: ResponsiveSize(20)}} />
            <TouchableOpacity
              style={checkoutStyle.cardDetails}
              onPress={() => setSelectedOption('By courier')}>
              <Image source={IMAGES.cycle} />
              <Text
                style={[
                  checkoutStyle.DetailsText,
                  selectedOption === 'By courier' && {color: COLORS.change},
                ]}>
                By courier
              </Text>
              <View style={{flex: 1}} />
              {selectedOption === 'By courier' && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
            <View style={{height: ResponsiveSize(20)}} />
            <TouchableOpacity
              style={checkoutStyle.cardDetails}
              onPress={() => setSelectedOption('By Drone')}>
              <Image source={IMAGES.drone} />
              <Text
                style={[
                  checkoutStyle.DetailsText,
                  selectedOption === 'By Drone' && {color: COLORS.change},
                ]}>
                By Drone
              </Text>
              <View style={{flex: 1}} />
              {selectedOption === 'By Drone' && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default DeliveryOptionsComponent;
