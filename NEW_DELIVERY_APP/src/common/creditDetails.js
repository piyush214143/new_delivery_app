import React from 'react';
import {
  View,
  TextInput,
  Image,
  Animated,
  Text,
  TouchableOpacity,
  ImageBackground,
  Easing,
} from 'react-native';
import paymentStyle from '../screen/Payment/style';
import {IMAGES, COLORS} from '../utils/constants';
import {CardScanView} from '@cardscan.ai/insurance-cardscan-react-native';

export const CardDisplay = ({
  cardNumber,
  cardName,
  expiry,
  cvv,
  isFlipped,
  flipAnimation,
  setIsFlipped,
}) => {
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

  const frontAnimatedStyle = {transform: [{rotateY: frontInterpolate}]};
  const backAnimatedStyle = {transform: [{rotateY: backInterpolate}]};

  return (
    <TouchableOpacity onPress={handleFlip}>
      <View
        style={[
          paymentStyle.card,
          isFlipped ? paymentStyle.flippedCard : null,
        ]}>
        <Animated.View style={[paymentStyle.cardFace, frontAnimatedStyle]}>
          <ImageBackground
            source={IMAGES.cardBase}
            resizeMode="cover"
            style={paymentStyle.base}>
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
          </ImageBackground>
        </Animated.View>
        <Animated.View
          style={[
            paymentStyle.cardFace,
            paymentStyle.cardFaceBack,
            backAnimatedStyle,
          ]}>
          <ImageBackground
            source={IMAGES.cardBase}
            resizeMode="cover"
            style={paymentStyle.base}>
            <Image source={IMAGES.basePart} style={paymentStyle.basePart} />
            <Text style={paymentStyle.cardValueFlipped}>{cvv || '***'}</Text>
          </ImageBackground>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export const CardInput = ({
  handleCardNameChange,
  handleCardNumberChange,
  handleExpiryChange,
  handleCVVChange,
  cardNumber,
  cardName,
  expiry,
  cvv,
  submitted,
  containsSpecialChars,
  validateCardName,
  validateCardNumber,
  validateExpiry,
  validateCVV,
  handleOpenCardScanner,
  handleSubmit,
}) => {
  return (
    <View style={paymentStyle.inputContainer}>
      <TouchableOpacity onPress={handleOpenCardScanner}>
        <Image source={IMAGES.photoIcon} style={paymentStyle.photoIcon} />
      </TouchableOpacity>
      <View>
        <Text style={paymentStyle.cardLabel}>Name on card</Text>
        <TextInput
          style={paymentStyle.input}
          placeholder="Vaishali Yadav"
          placeholderTextColor={COLORS.dGrey}
          onChangeText={handleCardNameChange}
          maxLength={20}
        />
        {containsSpecialChars && (
          <Text style={paymentStyle.invalid}>
            Special characters and numbers are not allowed
          </Text>
        )}
        {submitted && !validateCardName(cardName) && (
          <Text style={paymentStyle.invalid}>This is a required field </Text>
        )}
      </View>
      <View>
        <Text style={paymentStyle.cardLabel}>Card number</Text>
        <View style={paymentStyle.cardNumberRow}>
          <TextInput
            style={paymentStyle.input}
            placeholderTextColor={COLORS.dGrey}
            onChangeText={handleCardNumberChange}
            value={cardNumber}
            maxLength={19}
            keyboardType="numeric"
          />
          {cardNumber.length === 0 && (
            <Text style={paymentStyle.placeholder}>**** **** **** ****</Text>
          )}
          <Image source={IMAGES.cardSymbol} style={paymentStyle.cardSymbol} />
        </View>
        {submitted && !validateCardNumber(cardNumber) && (
          <Text style={paymentStyle.invalid}>This is a required field</Text>
        )}
      </View>
      <View style={paymentStyle.detailCard}>
        <View>
          <Text style={paymentStyle.cardLabel}>Expiry date</Text>
          <TextInput
            style={paymentStyle.inputRow}
            placeholder="02/26"
            placeholderTextColor={COLORS.dGrey}
            onChangeText={handleExpiryChange}
            maxLength={4}
            keyboardType="numeric"
          />
          {submitted && !validateExpiry(expiry) && (
            <Text style={paymentStyle.invalid}>This is a required field</Text>
          )}
        </View>
        <View>
          <Text style={paymentStyle.cardLabel}>CVV</Text>
          <View style={paymentStyle.cardNumberRow}>
            <TextInput
              style={paymentStyle.inputRow}
              placeholder="***"
              placeholderTextColor={COLORS.dGrey}
              onChangeText={handleCVVChange}
              maxLength={3}
              secureTextEntry={true}
              keyboardType="numeric"
            />
            <Image source={IMAGES.cvv} style={paymentStyle.cardSymbol} />
          </View>
          {submitted && !validateCVV(cvv) && (
            <Text style={paymentStyle.invalid}>This is a required field</Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={paymentStyle.btn1Container}
        onPress={handleSubmit}>
        <Text style={paymentStyle.btn1}>USE THIS CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CardScanner = ({setIsScannerOpen}) => {
  return (
    <View>
        <CardScanView
          style={paymentStyle.card}
          // sessionToken={null}
          onSuccess={card => {
            setCardNumber(card.number);
            setExpiry(card.expiry);
            setCVV(card.cvv);
            setIsScannerOpen(true);
          }}
          onError={error => {
            console.error('Error scanning card:', error);
            setIsScannerOpen(false);
          }}
        />
    </View>
  );
};
