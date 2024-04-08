import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  Easing,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid,
  PermissionsIOS,
  ImageBackground,
} from 'react-native';
import paymentStyle from './style';
import categoryStyle from '../Categories/style';
import { COLORS, IMAGES } from '../../utils/constants';
import { CardScanView } from '@cardscan.ai/insurance-cardscan-react-native'; 

const Payment = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [submitted, setSubmitted] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

 const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid?.PERMISSIONS?.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to scan cards.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermissionGranted(true);
        } else {
          setCameraPermissionGranted(false);
        }
      } 
      // else if (Platform.OS === 'ios') {
      //   const granted = await PermissionsIOS.request(
      //     PermissionsIOS?.PERMISSIONS?.CAMERA
      //   );
      //   if (granted === 'granted') {
      //     setCameraPermissionGranted(true);
      //   } else {
      //     setCameraPermissionGranted(false);
      //   }
      // }
    } catch (err) {
      console.warn(err);
      setCameraPermissionGranted(false);
    }
  };

  const handleOpenCardScanner = () => {
    if (cameraPermissionGranted === true) {
      setIsScannerOpen(true);
    } else {
      console.log('Camera permissions not granted');
    }
  };

  const formatCreditCardNumber = (value) => {
    let formattedValue = value.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    return formattedValue.slice(0, 19);
  };

   const handleCardNumberChange = (value) => {
    setCardNumber(formatCreditCardNumber(value));
  };

  const formatCardName = (name) => {
    const lowercaseName = name.toLowerCase();
    const words = lowercaseName.split(' ');
    const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return formattedName;
  };

   const handleCardNameChange = (value) => {
    setCardName(formatCardName(value));
  };

const formatCVV = (cvv) => {
  const formattedCVV = cvv.replace(/\D/g, '');
  return formattedCVV.slice(0, 3);
};

const handleCVVChange = (value) => {
  setCVV(formatCVV(value));
};

const formatExpiry = (expiry) => {
  const formattedExpiry = expiry.replace(/\D/g, '');
  if (formattedExpiry.length > 2) {
    return `${formattedExpiry.slice(0, 2)}/${formattedExpiry.slice(2)}`;
  }
  return formattedExpiry;
};

const handleExpiryChange = (value) => {
  setExpiry(formatExpiry(value));
};

  const validateCardNumber = (number) => {
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
  };

  const validateExpiry = (date) => {
    return /^\d{2}\/\d{2}$/.test(date);
  };

  const validateCVV = (cvv) => {
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


  const handleCloseScanner = () => {
    setIsScannerOpen(false);
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
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={paymentStyle.container}>
        <View style={categoryStyle.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack('')}>
            <Image source={IMAGES.arrow} style={categoryStyle.arrow} />
          </TouchableOpacity>
          <Text style={categoryStyle.heading}>Credit / Debit card</Text>
        </View>
        <View style={{flex:1}}>
        <View style={paymentStyle.cardContainer}>
          {isScannerOpen ? (
            <CardScanView
              style={paymentStyle.card}
              // sessionToken={null}
              onSuccess={(card) => {
                setCardNumber(card.number);
                setExpiry(card.expiry);
                setCVV(card.cvv);
                setIsScannerOpen(false);
              }}
              onError={(error) => {
                console.error('Error scanning card:', error);
                setIsScannerOpen(false);
              }}
            />
          ) : (
            <TouchableOpacity onPress={handleFlip}>
              <View
                style={[
                  paymentStyle.card,
                  isFlipped ? paymentStyle.flippedCard : null,
                ]}
              >
                <Animated.View
                  style={[
                    paymentStyle.cardFace,
                    frontAnimatedStyle,
                  ]}
                >
                  <ImageBackground source={IMAGES.cardBase} resizeMode="cover" style={paymentStyle.base}>
                  <Image
                    source={IMAGES.basePart}
                    style={paymentStyle.basePart}
                    />
                  <Image
                    source={IMAGES.mcSymbol}
                    style={paymentStyle.mcSymbol}
                  />
                  <Text style={paymentStyle.cardValue}>
                    {cardNumber || '4747 4747 4747 4747'}
                  </Text>
                  <View style={paymentStyle.cardRow}>
                    <Text style={paymentStyle.cardHolder}>
                      {cardName || 'VAISHALI YADAV'}
                    </Text>
                    <Text style={paymentStyle.cardExpiry}>
                      {expiry || '02/26'}
                    </Text>
                  </View>
                  </ImageBackground>
                  {/* </ImageBackground> */}
                </Animated.View>
                <Animated.View
                  style={[
                    paymentStyle.cardFace,
                    paymentStyle.cardFaceBack,
                    backAnimatedStyle,
                  ]}
                >
                  <ImageBackground source={IMAGES.cardBase} resizeMode="cover" style={paymentStyle.base}>
                  {/* <Image
                    source={IMAGES.basePart}
                    style={paymentStyle.basePart}
                  /> */}
                  <Text style={paymentStyle.cardValueFlipped}>
                    {cvv || '***'}
                  </Text>
                  </ImageBackground>
                </Animated.View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={paymentStyle.inputContainer}>
          <TouchableOpacity onPress={handleOpenCardScanner}>
            <Image
              source={IMAGES.photoIcon}
              style={paymentStyle.photoIcon}
            />
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
            {submitted && !cardName && (
              <Text style={paymentStyle.invalid}>*Invalid</Text>
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
              />
              {cardNumber.length === 0 && (
                <Text style={paymentStyle.placeholder}>**** **** **** ****</Text>
              )}
              <Image
                source={IMAGES.cardSymbol}
                style={paymentStyle.cardSymbol}
              />
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
                placeholderTextColor={COLORS.dGrey}
               onChangeText={handleExpiryChange}
                maxLength={4}
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
                  placeholderTextColor={COLORS.dGrey}
                  onChangeText={handleCVVChange}
                  maxLength={3}
                />
                <Image
                  source={IMAGES.cvv}
                  style={paymentStyle.cardSymbol}
                />
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
      </View>
    </ScrollView>
  );
};

export default Payment;