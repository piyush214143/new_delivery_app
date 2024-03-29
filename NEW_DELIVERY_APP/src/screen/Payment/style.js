import {StyleSheet, Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import {COLORS, FONTS} from '../../utils/constants';

const windowHeight = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

const paymentStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: windowHeight,
    padding: ResponsiveSize(20),
    paddingTop: ResponsiveSize(40),
    flex: 1,
  },
  card: {
    height: windowHeight * 0.25,
    // width:width* 0.50,
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
  },
  basePart: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  mcSymbol: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: ResponsiveSize(20),
    right: ResponsiveSize(20),
  },
  cardFaceBack: {
    transform: [{rotateY: '180deg'}],
  },
  cardLabel: {
    color: COLORS.para,
    fontSize: ResponsiveSize(14),
    paddingHorizontal: ResponsiveSize(10),
  },
  cardValue: {
    color: COLORS.white,
    fontSize: ResponsiveSize(26),
    fontWeight: '500',
    position: 'absolute',
    // alignSelf: 'center',
  },
  detailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    position:'absolute',
    bottom:ResponsiveSize(20),
    left:ResponsiveSize(20)
  },
  cardHolder: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: ResponsiveSize(20),
  },
  cardExpiry: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: ResponsiveSize(20),
  },
  cardValueFlipped: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    transform: [{scaleX: -1}],
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
    width: width / 2.5,
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
});

export default paymentStyle;
