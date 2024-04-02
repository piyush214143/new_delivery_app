import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const checkoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  checkoutHeader: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: windowHeight * 0.12,
    padding: ResponsiveSize(20),
    paddingTop: ResponsiveSize(65),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: ResponsiveSize(15),
  },
  checkoutText: {
    color: COLORS.heading,
    fontWeight: '600',
    fontSize: ResponsiveSize(17),
  },
  checkoutContainer: {
    flex: 1,
    padding: ResponsiveSize(20),
    justifyContent: 'space-evenly',
    paddingTop:'-10%'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: ResponsiveSize(22),
    color: COLORS.heading,
    fontWeight: '700',
  },
  change: {
    fontSize: ResponsiveSize(15),
    color: COLORS.change,
    fontWeight: '600',
  },
  DeliveryOptions:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingBottom:'7%'
  },
  delivery: {
   justifyContent:'space-evenly'
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DeliveryDetails:{
    flexDirection: 'row',
  },
  DetailsText: {
    fontSize: ResponsiveSize(17),
    color: COLORS.para,
    fontWeight: '400',
    fontFamily: FONTS.sfRegular,
    paddingHorizontal: '10%',
    lineHeight:ResponsiveSize(25.5)
  },
  tick: {
    justifyContent:'flex-end' 
  },
});

export default checkoutStyle;
