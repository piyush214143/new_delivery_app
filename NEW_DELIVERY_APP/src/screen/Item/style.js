import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, IMAGES} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bottom: {
    backgroundColor: COLORS.grey,
    position: 'absolute',
    borderTopStartRadius: ResponsiveSize(40),
    borderTopEndRadius: ResponsiveSize(40),
    width: '100%',
    height: windowHeight * 0.68,
    bottom: 0,
    justifyContent: 'space-evenly',
    paddingHorizontal: ResponsiveSize(20),
  },
  itemName: {
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(30),
  },
  productPrice: {
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(32),
  },
  pieceText: {
    color: COLORS.para,
    fontSize: ResponsiveSize(24),
    paddingHorizontal: ResponsiveSize(5),
  },
  quantity: {
    color: COLORS.quantity,
    fontWeight: '500',
    fontSize: ResponsiveSize(17),
  },
  place: {
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(22),
  },
  description: {
    color: COLORS.para,
    fontSize: ResponsiveSize(14),
    paddingBottom: '15%',
    lineHeight: ResponsiveSize(25.5),
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: '10%',
  },
  icon1Section: {
    width: width * 0.2,
    paddingVertical: ResponsiveSize(17),
    borderRadius: ResponsiveSize(8),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
  },
  icon2Section: {
    width: width * 0.6,
    paddingVertical: ResponsiveSize(17),
    borderRadius: ResponsiveSize(8),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: {
    width: ResponsiveSize(20),
    height: ResponsiveSize(20),
    alignSelf: 'center',
  },
  add: {
    fontSize: ResponsiveSize(15),
    fontWeight: '600',
  },
});

export default itemStyle;
