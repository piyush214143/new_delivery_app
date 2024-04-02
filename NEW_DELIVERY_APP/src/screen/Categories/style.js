import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');
const CARD_MARGIN = ResponsiveSize(10);
const CARD_PADDING_HORIZONTAL = ResponsiveSize(10);
const NUM_COLUMNS = 2;
const cardWidth =
  (width - (NUM_COLUMNS + 1) * CARD_MARGIN - 2 * CARD_PADDING_HORIZONTAL) /
  NUM_COLUMNS;
const cardHeight = cardWidth * 1.2;

const categoryStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: windowHeight,
    padding: ResponsiveSize(20),
    paddingTop:ResponsiveSize(40)
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: windowHeight * 0.23,
  },
  header: {
    height: windowHeight * 0.15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: ResponsiveSize(31),
    color: COLORS.heading,
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: ResponsiveSize(100),
    borderWidth: ResponsiveSize(1),
    borderColor: COLORS.border,
    paddingHorizontal:ResponsiveSize(10)
  },
  search: {
    width: '80%',
    height: ResponsiveSize(48),
  },
  itemContainer: {
    paddingRight: CARD_PADDING_HORIZONTAL,
    paddingTop: CARD_MARGIN,
    paddingBottom: CARD_MARGIN,
    flex:1
  },
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: ResponsiveSize(8),
    backgroundColor: COLORS.white,
    width: cardWidth,
    height: cardHeight,
    justifyContent: 'space-evenly',
    bottom: '20%',
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
