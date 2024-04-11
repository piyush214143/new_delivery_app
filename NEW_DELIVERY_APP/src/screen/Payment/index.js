import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import paymentStyle from './style';
import categoryStyle from '../Categories/style';
import {IMAGES} from '../../utils/constants';
import {CardDisplay, CardInput} from '../../common/creditDetails';

const Payment = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [submitted, setSubmitted] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
  const [containsSpecialChars, setContainsSpecialChars] = useState(false);

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
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermissionGranted(true);
        } else {
          setCameraPermissionGranted(false);
        }
      }
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

  const formatCreditCardNumber = value => {
    let formattedValue = value.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    return formattedValue.slice(0, 19);
  };

  const handleCardNumberChange = value => {
    setCardNumber(formatCreditCardNumber(value));
  };

  const handleExpiryChange = value => {
    const numericValue = value.replace(/\D/g, '');
    const maxLength = 4;
    const truncatedValue = numericValue.slice(0, maxLength);
    const formattedExpiry = truncatedValue.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    setExpiry(formattedExpiry);
  };

  const handleCVVChange = value => {
    const formattedCVV = value.replace(/\D/g, '');
    setCVV(formattedCVV);
  };

  const formatCardName = name => {
    const cleanedName = name.replace(/"[A-Za-z]"/g, '').trim();
    const formattedName = cleanedName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedName;
  };

  const handleCardNameChange = value => {
    setCardName(formatCardName(value));
    setContainsSpecialChars(/[^\p{L}\s]/u.test(value));
  };

  const validateCardName = name => {
    return name.trim().length > 0;
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
      !validateCardName(cardName) ||
      !validateCardNumber(cardNumber) ||
      !validateExpiry(expiry) ||
      !validateCVV(cvv)
    ) {
      return;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={paymentStyle.container}>
        <View style={categoryStyle.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack('')}>
            <Image source={IMAGES.arrow} style={categoryStyle.arrow} />
          </TouchableOpacity>
          <Text style={categoryStyle.heading}>Credit / Debit card</Text>
        </View>
        <View style={{flex: 1}}>
          {isScannerOpen ? (
            <CardScanner onSuccess={onSuccess} onError={onError} />
          ) : (
            <CardDisplay
              cardNumber={cardNumber}
              cardName={cardName}
              expiry={expiry}
              cvv={cvv}
              isFlipped={isFlipped}
              flipAnimation={flipAnimation}
              setIsFlipped={setIsFlipped}
            />
          )}
          <CardInput
            handleCardNameChange={handleCardNameChange}
            handleCardNumberChange={handleCardNumberChange}
            handleExpiryChange={handleExpiryChange}
            handleCVVChange={handleCVVChange}
            cardNumber={cardNumber}
            cardName={cardName}
            expiry={expiry}
            cvv={cvv}
            submitted={submitted}
            containsSpecialChars={containsSpecialChars}
            validateCardName={validateCardName}
            validateCardNumber={validateCardNumber}
            validateExpiry={validateExpiry}
            validateCVV={validateCVV}
            handleSubmit={handleSubmit}
            handleOpenCardScanner={handleOpenCardScanner}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;
