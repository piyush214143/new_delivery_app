import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, IMAGES} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: 'cover',
    backgroundColor:'black',
    width:'100%'
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
    paddingHorizontal:ResponsiveSize(20)
  },
  itemName:{
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(30),
  },
  productPrice:{
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(32),
  },
  quantity:{
    color: COLORS.quantity,
    fontWeight: '500',
    fontSize: ResponsiveSize(17),
  },
  place:{
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(22),
  },
  description:{
    color: COLORS.para,
    fontSize: ResponsiveSize(14),
  }
});

export default itemStyle;
