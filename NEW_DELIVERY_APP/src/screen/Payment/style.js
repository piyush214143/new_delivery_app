import {StyleSheet, Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import {COLORS, FONTS} from '../../utils/constants';

const screenWidth = Dimensions.get('window').width;

const isTablet = screenWidth > 768;

const paymentStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: '100%',
    width: '100%',
    padding: ResponsiveSize(20),
    paddingTop: ResponsiveSize(40),
    flex: 1,
  },
  cardContainer: {
    height: screenWidth * ResponsiveSize(0.5) - screenWidth * ResponsiveSize(80),
    width:'100%',
    justifyContent: 'center',
    perspective: 1000,
    borderRadius: ResponsiveSize(8),
    alignSelf: 'center',
    marginVertical:ResponsiveSize(10)
  },
  card: {
    width: '100%',
    height: isTablet ? ResponsiveSize(300) : screenWidth > 768 ? ResponsiveSize(300) : ResponsiveSize(210),
    borderRadius: ResponsiveSize(8),
    overflow: 'hidden',
    alignSelf: 'center',
  },
  flippedCard: {
    transform: [{rotateY: '180deg'}],
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFaceBack: {
    transform: [{rotateY: '180deg'}],
  },
  cardLabel: {
    color: COLORS.para,
    fontSize: ResponsiveSize(14),
    paddingVertical: ResponsiveSize(5),
  },
  cardNumberRow: {
    justifyContent: 'center',
  },
  cardSymbol: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: ResponsiveSize(10),
  },
  base: {
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    // shadowColor: '#B894D7',
    // shadowOffset: {
    //   width: ResponsiveSize(6),
    //   height: 6,
    // },
    // shadowOpacity: 0.60,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  basePart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: '100%',
    width: '70%',
  },
  mcSymbol: {
    alignSelf: 'flex-end',
    marginTop: ResponsiveSize(20),
    marginRight: ResponsiveSize(20),
  },
  cardValue: {
    color: COLORS.white,
    fontSize: isTablet ? ResponsiveSize(36) : ResponsiveSize(26), // Adjusted font size for tablets
    fontWeight: '500',
    alignSelf: 'flex-start',
    letterSpacing: isTablet ? ResponsiveSize(5.8) : ResponsiveSize(0.8), // Adjusted letterSpacing for tablets
    marginLeft: ResponsiveSize(30),
  },
  detailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: ResponsiveSize(30),
  },
  cardHolder: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize:isTablet ? ResponsiveSize(25) : ResponsiveSize(20),
    letterSpacing: ResponsiveSize(0.48),
  },
  cardExpiry: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize:isTablet ? ResponsiveSize(25) : ResponsiveSize(20),
  },
  cardValueFlipped: {
    color: COLORS.white,
    fontSize:ResponsiveSize(20),
    transform: [{scaleX: -1}],
    padding: ResponsiveSize(100),
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  photoIcon: {
    alignSelf: 'center',
  },
  inputRow: {
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderWidth: ResponsiveSize(1),
    borderRadius: ResponsiveSize(8),
    color: COLORS.heading,
    fontSize: ResponsiveSize(17),
    paddingVertical: ResponsiveSize(10),
    paddingHorizontal: ResponsiveSize(10),
    width: ResponsiveSize(160),
  },
  input: {
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderWidth: ResponsiveSize(1),
    borderRadius: ResponsiveSize(8),
    color: COLORS.heading,
    fontSize: ResponsiveSize(17),
    paddingVertical: ResponsiveSize(10),
    paddingHorizontal: ResponsiveSize(10),
  },
  placeholder: {
    position: 'absolute',
    paddingHorizontal: ResponsiveSize(10),
    paddingTop: ResponsiveSize(5),
    color: COLORS.dGrey,
  },
  invalid: {
    color: 'red',
    fontSize: ResponsiveSize(14),
  },
  btn1Container: {
    backgroundColor: COLORS.button,
    width: '99%',
    height: ResponsiveSize(56),
    borderRadius: ResponsiveSize(8),
    marginBottom: ResponsiveSize(20),
    justifyContent: 'center',
    alignSelf: 'center',
    top: ResponsiveSize(30),
  },
  btn1: {
    color: COLORS.white,
    fontSize: ResponsiveSize(15),
    fontWeight: '600',
    fontFamily: FONTS.sfRegular,
    textAlign: 'center',
  },
});

export default paymentStyle;
