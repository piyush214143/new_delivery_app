import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    // height: windowHeight,
    flexDirection: 'column',
    padding: ResponsiveSize(20),
    paddingTop:ResponsiveSize(40),
    flex:1
  },
  bGImage: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  itemContainer: {
    backgroundColor: COLORS.list,
    flexDirection: 'row',
    marginRight: ResponsiveSize(10),
    height: ResponsiveSize(34),
    borderRadius: ResponsiveSize(100),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  sectionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    left:0,
    right:0,
    height:ResponsiveSize(100),
    paddingTop:ResponsiveSize(20),
  },
  cardContainer:{
    flex:1,
    height:ResponsiveSize(200),
  },
  image: {
    alignSelf: 'center',
  },
  name: {
    fontSize: ResponsiveSize(16),
    paddingLeft: ResponsiveSize(12),
    paddingRight: ResponsiveSize(2),
  },
  items: {
    alignSelf: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: ResponsiveSize(30),
    marginRight:ResponsiveSize(80)
  },
  imageContainer:{
    // padding:'1%',
  },
  productImage: {
    borderRadius: ResponsiveSize(8),
    paddingHorizontal:'35%',
    paddingVertical:'20%'
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    right:0,
    left:ResponsiveSize(10)
  },
  productName: {
    color: COLORS.heading,
    fontWeight: '600',
    fontSize: ResponsiveSize(18),
  },
  productPrice: {
    color: COLORS.heading,
    fontWeight: '700',
    fontSize: ResponsiveSize(22),
  },
  pieceText: {
    color: COLORS.para,
    fontSize: ResponsiveSize(16),
    alignSelf:'center',
    paddingHorizontal:ResponsiveSize(5)
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSection: {
    paddingHorizontal:'11%',
    paddingVertical: ResponsiveSize(10),
    borderRadius: ResponsiveSize(8),
    marginRight: ResponsiveSize(15),
    borderWidth:1,
    borderColor:COLORS.border
  },
  icon: {
    width: ResponsiveSize(20),
    height: ResponsiveSize(20),
  },
});

export default cardStyle;
