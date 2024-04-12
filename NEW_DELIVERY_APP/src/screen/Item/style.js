import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: windowHeight,
  },
  bottom: {
    backgroundColor: COLORS.grey,
    position: 'absolute',
    borderTopStartRadius: ResponsiveSize(40),
    borderTopEndRadius: ResponsiveSize(40),
    width:'100%',
    height: '70%',
    bottom: 0,
    justifyContent: 'space-evenly',
    paddingHorizontal: ResponsiveSize(20),
    paddingBottom:'20%'
  },
  itemName: {
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(30),
    paddingTop:ResponsiveSize(20)
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
    fontSize: ResponsiveSize(17),
    lineHeight: ResponsiveSize(25.5),
    paddingBottom:ResponsiveSize(70)
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position:'absolute',
    bottom:0,
    paddingHorizontal:ResponsiveSize(10),
    paddingLeft:ResponsiveSize(20),
    paddingBottom:ResponsiveSize(50)
  },
  icon1Section: {
    width: '25%',
    borderRadius: ResponsiveSize(8),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
  },
  icon2Section: {
    width: '70%',
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
