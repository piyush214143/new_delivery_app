import {StyleSheet, Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import {COLORS, FONTS} from '../../utils/constants';

const windowHeight = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

const paymentStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: '100%',
    padding: ResponsiveSize(20),
    paddingTop: ResponsiveSize(40),
    flex: 1,
  },
  cardContainer: {
    height: '25%',
    width: '47%',
    alignSelf:'center'
  },
  card: {
    height: '100%',
    width: width * 0.47,
    paddingHorizontal: ResponsiveSize(170),
    borderRadius: ResponsiveSize(8),
    overflow: 'hidden',
    alignSelf: 'center',
  },
  flippedCard: {
    transform: [{rotateY: '180deg'}],
  },
  cardFace: {
    flex: 1,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    width: width * 0.47,
    height: '100%'
  },
  basePart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    transform: [{scaleX: -1}],
    left:0
  },
  mcSymbol: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: '10%',
    right: '5%',
  },
  cardFaceBack: {
    transform: [{rotateY: '180deg'}]
  },
  cardLabel: {
    color: COLORS.para,
    fontSize: ResponsiveSize(14),
    paddingVertical:ResponsiveSize(5)
  },
  cardNumberRow: {
    justifyContent: 'center',
  },
  cardSymbol: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: ResponsiveSize(10),
  },
  cardValue: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '500',
    position: 'absolute',
    alignSelf: 'center',
    letterSpacing: ResponsiveSize(1.5),
  },
  detailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '15%',
    left: '10%',
    right: '10%',
  },
  cardHolder: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: ResponsiveSize(0.48),
  },
  cardExpiry: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 20,
  },
  cardValueFlipped: {
    color: COLORS.white,
    fontSize: ResponsiveSize(20),
    position: 'absolute',
    transform: [{scaleX: -1}],
    left:'10%'
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
    width: ResponsiveSize(250),
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
  placeholder:{
   position:'absolute',
   paddingHorizontal:ResponsiveSize(10),
   paddingTop:ResponsiveSize(5),
   color:COLORS.dGrey
  },
  invalid: {
    color: 'red',
  },
  btn1Container: {
    backgroundColor: COLORS.button,
    width: '95%',
    height: ResponsiveSize(56),
    borderRadius: ResponsiveSize(8),
    marginBottom: ResponsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn1: {
    color: COLORS.white,
    fontSize: ResponsiveSize(15),
    fontWeight: '600',
    fontFamily: FONTS.sfRegular,
  },
});

export default paymentStyle;
