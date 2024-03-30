import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  Easing,
  Image,
} from 'react-native';
import paymentStyle from './style';
import categoryStyle from '../Categories/style';
import {COLORS, IMAGES} from '../../utils/constants';

const Payment = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [submitted, setSubmitted] = useState(false);

  const handleCardNameChange = text => {
    setCardName(text);
  };

  const validateCardNumber = number => {
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
  };

  const validateExpiry = date => {
    return /^\d{2}\/\d{2}$/.test(date);
  };

  const validateCVV = cvv => {
    return /^\d{3}$/.test(cvv);
  };

  const handleSubmit = () => {
    setSubmitted(true);

    if (
      !cardName ||
      !validateCardNumber(cardNumber) ||
      !validateExpiry(expiry) ||
      !validateCVV(cvv)
    ) {
      return;
    }
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
      <View style={categoryStyle.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack('')}>
          <Image source={IMAGES.arrow} style={categoryStyle.arrow} />
        </TouchableOpacity>
        <Text style={categoryStyle.heading}>Credit / Debit card</Text>
      </View>
      <View style={paymentStyle.cardContainer}>
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
            <Image
              source={IMAGES.cardBase}
              style={paymentStyle.cardImage}
              resizeMode="cover"
            />
            <Image source={IMAGES.basePart} style={paymentStyle.basePart} />
            <Image source={IMAGES.mcSymbol} style={paymentStyle.mcSymbol} />
            <Text style={paymentStyle.cardValue}>
              {cardNumber || '4747 4747 4747 4747'}
            </Text>
            <View style={paymentStyle.cardRow}>
              <Text style={paymentStyle.cardHolder}>
                {cardName || 'VAISHALI YADAV'}
              </Text>
              <Text style={paymentStyle.cardExpiry}>{expiry || '02/26'}</Text>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              paymentStyle.cardFace,
              paymentStyle.cardFaceBack,
              backAnimatedStyle,
            ]}>
            <Image
              source={IMAGES.cardBase}
              style={paymentStyle.cardImage}
              resizeMode="cover"
            />
            <Image source={IMAGES.basePart} style={paymentStyle.basePart} />
            <Text style={paymentStyle.cardValueFlipped}>{cvv || '***'}</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
      </View>
      <View style={paymentStyle.inputContainer}>
        <Image source={IMAGES.photoIcon} style={paymentStyle.photoIcon} />
        <View>
          <Text style={paymentStyle.cardLabel}>Name on card</Text>
          <TextInput
            style={paymentStyle.input}
            placeholder="Vaishali Yadav"
            placeholderTextColor={COLORS.border}
            onChangeText={handleCardNameChange}
            maxLength={35}
          />
          {submitted && !cardName && (
            <Text style={paymentStyle.invalid}>*Invalid</Text>
          )}
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>Card number</Text>
          <View style={paymentStyle.cardNumberRow}>
            <TextInput
              style={paymentStyle.input}
              placeholder="**** **** **** ****"
              onChangeText={text => setCardNumber(text)}
              maxLength={19}
            />
            <Image source={IMAGES.cardSymbol} style={paymentStyle.cardSymbol} />
          </View>
          {submitted && !validateCardNumber(cardNumber) && (
            <Text style={paymentStyle.invalid}>*Invalid</Text>
          )}
        </View>
        <View style={paymentStyle.detailCard}>
          <View>
            <Text style={paymentStyle.cardLabel}>Expiry date</Text>
            <TextInput
              style={paymentStyle.inputRow}
              placeholder="02/26"
              onChangeText={text => setExpiry(text)}
              maxLength={5}
            />
            {submitted && !validateExpiry(expiry) && (
              <Text style={paymentStyle.invalid}>*Invalid</Text>
            )}
          </View>
          <View>
            <Text style={paymentStyle.cardLabel}>CVV</Text>
            <View style={paymentStyle.cardNumberRow}>
              <TextInput
                style={paymentStyle.inputRow}
                placeholder="***"
                onChangeText={text => setCVV(text)}
                maxLength={3}
              />
              <Image source={IMAGES.cvv} style={paymentStyle.cardSymbol} />
            </View>
            {submitted && !validateCVV(cvv) && (
              <Text style={paymentStyle.invalid}>*Invalid</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={paymentStyle.btn1Container}
          onPress={handleSubmit}>
          <Text style={paymentStyle.btn1}>USE THIS CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
