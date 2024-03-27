import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import Header from '../../common/header';
import paymentStyle from './style';

const Payment = props => {
  const [text, onChangeText] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const validateCardNumber = (number) => {
    return /^\d{16}$/.test(number);
  };

  const validateExpiry = (date) => {
    return /^\d{2}\/\d{2}$/.test(date);
  };

  const validateCVV = (cvv) => {
    return /^\d{3}$/.test(cvv);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  return (
    <View style={paymentStyle.container}>
      <Header
        heading={'Credit / Debit card'}
        back={() => props.navigation.goBack('')}
        value={text}
        onChangeText={onChangeText}
        search
      />
        <TouchableOpacity onPress={handleFlip}>
          <View
            style={[
              paymentStyle.card,
              isFlipped ? paymentStyle.flippedCard : null,
            ]}>
            <Animated.View
              style={[
                paymentStyle.cardFace,
                paymentStyle.cardFaceFront,
                frontAnimatedStyle,
              ]}>
              <Text style={paymentStyle.cardValue}>
                {cardNumber || '#### #### #### ####'}
              </Text>
              <Text style={paymentStyle.cardValue}>
                {cardName || 'YOUR NAME'}
              </Text>
               <Text style={paymentStyle.cardValue}>{expiry || 'MM/YY'}</Text>
            </Animated.View>
            <Animated.View
              style={[
                paymentStyle.cardFace,
                paymentStyle.cardFaceBack,
                backAnimatedStyle,
              ]}>
              <Text style={paymentStyle.cardValueFlipped}>{cvv || 'CVV'}</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
        <View style={paymentStyle.inputContainer}>
        <View>
          <Text style={paymentStyle.cardLabel}>Card Number</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="Card Number"
            onChangeText={(text) => setCardNumber(text)}
          />
          <Text>{validateCardNumber(cardNumber) ? '' : 'Invalid'} </Text>
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>Card Holder</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="Name on Card"
            onChangeText={(text) => setCardName(text)}
          />
          {/* Validation text for card holder name */}
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>Expiry</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="Expiry"
            onChangeText={(text) => setExpiry(text)}
          />
          <Text>{validateExpiry(expiry) ? '' : 'Invalid'}</Text>
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>CVV</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="CVV"
            onChangeText={(text) => setCVV(text)}
          />
          <Text>{validateCVV(cvv) ? '' : 'Invalid'}</Text>
        </View>
      </View>
    </View>
  );
};

export default Payment;
