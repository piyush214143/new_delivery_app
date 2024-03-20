import {React, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import checkoutStyle from './style';
import {COLORS, IMAGES} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';
import ToggleSwitch from 'toggle-switch-react-native';

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [isOnDefaultToggleSwitch, setIsOnDefaultToggleSwitch] = useState(false);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleToggle = () => {
    setIsOnDefaultToggleSwitch(prevState => !prevState);
  };

  const CustomToggleSwitchWithLabel = ({
  isOn,
  onToggle,
  label,
  labelStyle,
  ...toggleProps
}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={labelStyle}>{label}</Text>
      <ToggleSwitch
        isOn={isOn}
        onToggle={onToggle}
        {...toggleProps}
      />
      {isOn && <Text style={{ color:COLORS.heading,position:'absolute',fontSize:ResponsiveSize(14),fontWeight:'500'}}>Yes</Text>}
    </View>
  );
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
        <View style={checkoutStyle.DeliveryDetails}>
          <Image source={IMAGES.home} />
          <Text style={checkoutStyle.DetailsText}>
            Alexandra Smith{'\n'}Cesu 31 k-2 5.st, SIA Chili{'\n'}Riga {'\n'}
            LV-1012 {'\n'}Latvia
          </Text>
        </View>
        <View>
          <View style={checkoutStyle.DeliveryOptions}>
            <Text style={checkoutStyle.optionText}>Delivery options</Text>
            <Text style={checkoutStyle.change}>CHANGE</Text>
          </View>
          <View style={checkoutStyle.delivery}>
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
              <View style={{flex: 1}} />
              {selectedOption === "I'll pick it up myself" && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
            <View style={{height: ResponsiveSize(20)}} />
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
              <View style={{flex: 1}} />
              {selectedOption === 'By courier' && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
            <View style={{height: ResponsiveSize(20)}} />
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
              <View style={{flex: 1}} />
              {selectedOption === 'By Drone' && (
                <Image source={IMAGES.tick} style={checkoutStyle.tick} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={checkoutStyle.options}>
          <Text style={checkoutStyle.optionText}>Non-contact-delivery</Text>
          <CustomToggleSwitchWithLabel
            isOn={isOnDefaultToggleSwitch}
            onToggle={handleToggle}
            onColor={COLORS.list}
            offColor={COLORS.grey}
            size="medium"
          />
        </View>
      </View>
    </View>
  );
};

export default Checkout;
