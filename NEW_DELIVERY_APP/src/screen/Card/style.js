import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: windowHeight,
    flexDirection: 'column',
    padding: ResponsiveSize(20),
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
    flex: 1,
  },
  name: {
    fontSize: ResponsiveSize(16),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '3%',
    paddingTop: '5%',
  },
  productImage: {
    borderRadius: ResponsiveSize(8),
    width: width * 0.4 + ResponsiveSize(20),
    height: windowHeight * 0.16,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
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
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSection: {
    paddingHorizontal: ResponsiveSize(25),
    paddingVertical: ResponsiveSize(10),
    borderRadius: ResponsiveSize(8),
    marginRight: ResponsiveSize(15),
  },
  icon: {
    width: ResponsiveSize(20),
    height: ResponsiveSize(20),
  },
});

export default cardStyle;
