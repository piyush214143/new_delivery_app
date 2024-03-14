import {StyleSheet} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';

const mainStyle = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'red'
  },
  backDrop: {
    backgroundColor: '#A259FF',
    paddingVertical: ResponsiveSize(450),
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    width: ResponsiveSize(63),
    height: ResponsiveSize(63),
    backgroundColor: '#CDFFB6',
    top: ResponsiveSize(63),
    left: ResponsiveSize(20),
    borderRadius: ResponsiveSize(63 / 2),
  },
  logo: {
    top: ResponsiveSize(17),
    left: ResponsiveSize(20),
  },
  base: {
    backgroundColor: '#F6F5F5',
    position: 'absolute',
    paddingHorizontal: ResponsiveSize(197),
    paddingVertical: '60%',
    right: 0,
    left: 0,
    bottom: 0,
    top: ResponsiveSize(312),
    borderTopStartRadius: ResponsiveSize(40),
    borderTopEndRadius: ResponsiveSize(40),
    flexDirection:'column'
  },
  icon: {
    width: ResponsiveSize(104),
    height: ResponsiveSize(104),
    borderRadius: ResponsiveSize(104 / 2),
    backgroundColor: '#FFFFFF',
    left: ResponsiveSize(-55),
    top: ResponsiveSize(-180),
  },
  box: {
    width: ResponsiveSize(40),
    height: ResponsiveSize(40),
    left: ResponsiveSize(30),
    top: ResponsiveSize(30),
  },
  heading: {
    fontWeight: '700',
    fontSize: ResponsiveSize(34),
    color: '#2D0C57',
    position:'absolute',
    alignSelf:'center',
    top:ResponsiveSize(180),
    textAlign:'center',
    lineHeight:ResponsiveSize(41)
  },
  description:{
    fontWeight: '400',
    fontSize: ResponsiveSize(17),
    color: '#9586A8',
    position:'absolute',
    top:ResponsiveSize(275),
    textAlign:'center',
    lineHeight:ResponsiveSize(25),
    left:ResponsiveSize(21),
    right:ResponsiveSize(21)
  },
  btn1Container:{
    backgroundColor:'#0BCE83',
    top:ResponsiveSize(50),
    paddingHorizontal:ResponsiveSize(170),
    height:ResponsiveSize(56),
    alignSelf:'center',
    borderRadius:ResponsiveSize(8),  
  },
  btn:{
    color:'#FFFFFF',
    fontSize:ResponsiveSize(15),
    fontWeight:'600',
    alignSelf:'center',
    position:'absolute',
    top:ResponsiveSize(18)
  },
  btn2Container:{
    top:ResponsiveSize(50),
    paddingHorizontal:ResponsiveSize(170),
    height:ResponsiveSize(56),
    alignSelf:'center',
    borderRadius:ResponsiveSize(8),
    marginTop:10
  },
btn2:{
  color:'#9586A8',
  fontSize:ResponsiveSize(15),
  fontWeight:'600',
  alignSelf:'center',
  position:'absolute',
  top:ResponsiveSize(18)
}
});

export default mainStyle;
