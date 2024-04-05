import {StyleSheet, Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import {COLORS, FONTS} from '../../utils/constants';

const windowHeight = Dimensions.get('window').height;

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    height: windowHeight,
  },
  background:{
   alignSelf:'flex-end',
  },
  logoContainer: {
    width: ResponsiveSize(63),
    height: ResponsiveSize(63),
    backgroundColor: COLORS.logoBG,
    top: ResponsiveSize(63),
    left: ResponsiveSize(20),
    borderRadius: ResponsiveSize(63 / 2),
    position: 'absolute',
  },
  logo: {
    top: ResponsiveSize(17),
    left: ResponsiveSize(20),
  },
  base: {
    backgroundColor: COLORS.grey,
    position: 'absolute',
    borderTopStartRadius: ResponsiveSize(40),
    borderTopEndRadius: ResponsiveSize(40),
    width: '100%',
    height: '70%',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop:ResponsiveSize(10)
  },
  icon: {
    width: 104,
    height: 104,
    borderRadius: ResponsiveSize(104 / 2),
    backgroundColor: COLORS.white,
    alignSelf:'center',
    justifyContent:'center'
  },
  box: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    // top: ResponsiveSize(30),
    // justifyContent:'center',
  },
  heading: {
    fontWeight: '700',
    fontSize: ResponsiveSize(34),
    color: COLORS.heading,
    textAlign: 'center',
    lineHeight: ResponsiveSize(41),
    fontFamily: FONTS.sfRegular,
  },
  description: {
    fontWeight: '400',
    fontSize: ResponsiveSize(17),
    color: COLORS.para,
    textAlign: 'center',
    lineHeight: ResponsiveSize(25),
    fontFamily: FONTS.sfRegular,
  },
  btn1Container: {
    backgroundColor: COLORS.button,
    paddingHorizontal: '33%',
    height: ResponsiveSize(56),
    borderRadius: ResponsiveSize(8),
    justifyContent: 'center',
    alignSelf:'center',
  },
  btn1: {
    color: COLORS.white,
    fontSize: ResponsiveSize(15),
    fontWeight: '600',
    fontFamily: FONTS.sfRegular,
  },
  btn2Container: {
    paddingHorizontal: '30%',
    padding: ResponsiveSize(20),
    borderRadius: ResponsiveSize(8),
    justifyContent: 'center',
    top: ResponsiveSize(-10),
  },
  btn2: {
    color: COLORS.para,
    fontSize: ResponsiveSize(15),
    fontWeight: '600',
    fontFamily: FONTS.sfRegular,
  },
});

export default mainStyle;
