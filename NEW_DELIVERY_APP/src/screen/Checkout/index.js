import {React, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import checkoutStyle from './style';
import {COLORS, IMAGES} from '../../utils/constants';

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

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
          <Image source={IMAGES.creditCard} />
          <Text style={checkoutStyle.DetailsText}>**** **** **** 4747</Text>
        </View>
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
          <TouchableOpacity
            style={checkoutStyle.cardDetails}
            onPress={() => handleOptionSelect("I'll pick it up myself")}>
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
             <View style={{ flex: 1 }} />
            {selectedOption === "I'll pick it up myself" && (
              <Image source={IMAGES.tick} style={checkoutStyle.tick} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={checkoutStyle.cardDetails}
            onPress={() => handleOptionSelect('By courier')}>
            <Image source={IMAGES.cycle} />
            <Text
              style={[
                checkoutStyle.DetailsText,
                selectedOption === 'By courier' && {color: COLORS.change},
              ]}>
              By courier
            </Text>
             <View style={{ flex: 1 }} />
            {selectedOption === 'By courier' && (
              <Image source={IMAGES.tick} style={checkoutStyle.tick} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={checkoutStyle.cardDetails}
            onPress={() => handleOptionSelect('By Drone')}>
            <Image source={IMAGES.drone} />
            <Text
              style={[
                checkoutStyle.DetailsText,
                selectedOption === 'By Drone' && {color: COLORS.change},
              ]}>
              By Drone
            </Text>
            <View style={{ flex: 1 }} />
            {selectedOption === 'By Drone' && (
              <Image source={IMAGES.tick} style={checkoutStyle.tick} />
            )}
          </TouchableOpacity>
        </View>
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Non-contact-delivery</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
