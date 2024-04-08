import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const CARD_MARGIN = ResponsiveSize(10);
const CARD_PADDING_HORIZONTAL = ResponsiveSize(10);
const CARD_WIDTH_PERCENTAGE = 100;

const categoryStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    padding: ResponsiveSize(20),
    paddingTop: ResponsiveSize(40),
    flex:1
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height:ResponsiveSize(170)
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop:ResponsiveSize(20)
  },
  heading: {
    fontSize: ResponsiveSize(31),
    color: COLORS.heading,
    fontWeight: '700',
    paddingVertical:ResponsiveSize(20)
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLORS.border,
    paddingHorizontal: ResponsiveSize(10),
  },
  search: {
    width: '80%',
    height: ResponsiveSize(48),
    fontSize: ResponsiveSize(17)
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: CARD_PADDING_HORIZONTAL,
    paddingVertical:CARD_PADDING_HORIZONTAL,
    justifyContent: 'space-between',
    marginTop: ResponsiveSize(10),
  }, 
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: ResponsiveSize(8),
    backgroundColor: COLORS.white,
    width: `${CARD_WIDTH_PERCENTAGE}%`,
    aspectRatio: 0.9,
    justifyContent: 'space-evenly',
    marginBottom: CARD_MARGIN,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '87%',
  },
  name: {
    fontSize: ResponsiveSize(18),
    fontWeight: '700',
    color: COLORS.heading,
    fontFamily: FONTS.robotoRegular,
    paddingHorizontal: ResponsiveSize(20),
  },
  items: {
    fontSize: ResponsiveSize(12),
    color: COLORS.para,
    fontFamily: FONTS.robotoRegular,
    padding: ResponsiveSize(20),
  },
});

export default categoryStyle;

