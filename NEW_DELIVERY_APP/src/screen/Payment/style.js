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
    paddingTop:ResponsiveSize(40),
    flex: 1,
  },
  card: {
    padding:ResponsiveSize(120),
    borderRadius: ResponsiveSize(8),
    overflow: 'hidden',
  },
  flippedCard: {
    transform: [{rotateY: '180deg'}],
  },
  cardFace: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  cardFaceFront: {
  },
  cardFaceBack: {
    transform: [{rotateY: '180deg'}],
  },
  cardLabel: {
    color:COLORS.para,
    fontSize: ResponsiveSize(14),
    paddingHorizontal: ResponsiveSize(10),
  },
  cardValue: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
  },
  detailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
  },
  cardValueFlipped: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    transform: [{scaleX: -1}],
  },
  inputContainer: {
    flex: 1,
    justifyContent:'space-evenly'
  },
  photoIcon:{
  alignSelf:'center'
  },
  input: {
    borderColor: COLORS.border,
    backgroundColor:COLORS.white,
    borderWidth: ResponsiveSize(1),
    borderRadius:ResponsiveSize(8),
    color:COLORS.heading,
    fontSize:ResponsiveSize(17),
    paddingVertical:ResponsiveSize(10),
    paddingHorizontal: ResponsiveSize(10),
  },
});

export default paymentStyle;
