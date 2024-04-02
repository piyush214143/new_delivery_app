import {React, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import checkoutStyle from './style';
import {IMAGES} from '../../utils/constants';
import DeliveryOptionsComponent from '../../common/deliveryView';
import ToggleComponent from '../../common/toggle';

const Checkout = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOnDefaultToggleSwitch, setIsOnDefaultToggleSwitch] = useState(false);

  const moveToPayment = () => {
    props.navigation.navigate('Payment');
  };

  const handleToggle = () => {
    setIsOnDefaultToggleSwitch(prevState => !prevState);
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
          <TouchableOpacity onPress={moveToPayment}>
          <Text style={checkoutStyle.change}>CHANGE</Text>
          </TouchableOpacity>
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
          <DeliveryOptionsComponent 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
      />
      <View style={checkoutStyle.options}>
        <Text style={checkoutStyle.optionText}>Non-contact-delivery</Text>
        <ToggleComponent
          active={isOnDefaultToggleSwitch}
          onToggle={handleToggle}
        />
        </View>
      </View>
    </View>
  );
};

export default Checkout;
