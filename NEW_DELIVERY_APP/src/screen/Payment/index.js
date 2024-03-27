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
import mainStyle from '../MainScreen/style';

const Payment = props => {
  const [text, onChangeText] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const validateCardNumber = number => {
    return /^\d{16}$/.test(number);
  };

  const validateExpiry = date => {
    return /^\d{2}\/\d{2}$/.test(date);
  };

  const validateCVV = cvv => {
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
          <Text style={paymentStyle.cardLabel}>Card number</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="**** **** **** ****"
            onChangeText={text => setCardNumber(text)}
            maxLength={19}
          />
          <Text>{validateCardNumber(cardNumber) ? '' : 'Invalid'} </Text>
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>Name on card</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="Vaishali Yadav"
            onChangeText={text => setCardName(text)}
            maxLength={35}
          />
          {/* Validation text for card holder name */}
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>Expiry date</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="02/26"
            onChangeText={text => setExpiry(text)}
            maxLength={5}
          />
          <Text>{validateExpiry(expiry) ? '' : 'Invalid'}</Text>
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>CVV</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="***"
            onChangeText={text => setCVV(text)}
            maxLength={3}
          />
          <Text>{validateCVV(cvv) ? '' : 'Invalid'}</Text>
        </View>
      </View>
      <TouchableOpacity style={mainStyle.btn1Container}>
        <Text style={mainStyle.btn1}>USE THIS CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
