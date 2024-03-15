import {StyleSheet,Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import { FONTS } from '../../utils/constants';

const windowHeight = Dimensions.get('window').height;

const mainStyle = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor: '#A259FF',
   height:windowHeight
  },
  logoContainer: {
    width: ResponsiveSize(63),
    height: ResponsiveSize(63),
    backgroundColor: '#CDFFB6',
    top: ResponsiveSize(63),
    left: ResponsiveSize(20),
    borderRadius: ResponsiveSize(63 / 2),
    position:'absolute'
  },
  logo: {
    top: ResponsiveSize(17),
    left: ResponsiveSize(20),
  },
  base: {
    backgroundColor: '#F6F5F5',
    position: 'absolute',
    borderTopStartRadius: ResponsiveSize(40),
    borderTopEndRadius: ResponsiveSize(40),
    width:"100%",
    height: windowHeight * 0.65,
    flex: 0.65,
    bottom: 0,
    justifyContent:'space-evenly',
    alignItems:"center",
  },
  icon: {
    width: ResponsiveSize(104),
    height: ResponsiveSize(104),
    borderRadius: ResponsiveSize(104 / 2),
    backgroundColor: '#FFFFFF',
  },
  box: {
    width: ResponsiveSize(40),
    height: ResponsiveSize(40),
    alignSelf:'center',
    top: ResponsiveSize(30),
  },
  heading: {
    fontWeight: '700',
    fontSize: ResponsiveSize(34),
    color: '#2D0C57',
    textAlign:'center',
    lineHeight:ResponsiveSize(41),
  },
  description:{
    fontWeight: '400',
    fontSize: ResponsiveSize(17),
    color: '#9586A8',
    textAlign:'center',
    lineHeight:ResponsiveSize(25),
  },
  btn1Container:{
    backgroundColor:'#0BCE83',
    paddingHorizontal:'30%',
    height:ResponsiveSize(56),
    borderRadius:ResponsiveSize(8),
    justifyContent:"center"
  },
  btn1:{
    color:'#FFFFFF',
    fontSize:ResponsiveSize(15),
    fontWeight:'600',
  },
  btn2Container:{
    paddingHorizontal:'30%',
    padding:ResponsiveSize(20),
    borderRadius:ResponsiveSize(8),
    justifyContent:"center"
  },
btn2:{
  color:'#9586A8',
  fontSize:ResponsiveSize(15),
  fontWeight:'600',
}
});

export default mainStyle;
