import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const categoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
    height: windowHeight,
    padding: ResponsiveSize(20),
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: windowHeight * 0.23,
  },
  heading: {
    fontSize: ResponsiveSize(31),
    color: COLORS.heading,
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:ResponsiveSize(100),
    borderWidth:ResponsiveSize(1),
    borderColor:COLORS.border
  },
  search:{
   width: '80%',
   height:ResponsiveSize(48),
  }
});

export default categoryStyle;
