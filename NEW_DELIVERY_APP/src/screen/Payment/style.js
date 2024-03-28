import {StyleSheet, Dimensions} from 'react-native';
import ResponsiveSize from '../../utils/responsiveSize';
import {COLORS, FONTS} from '../../utils/constants';

const windowHeight = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

const paymentStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: windowHeight,
    padding: ResponsiveSize(20),
    flex:1
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    // width: width,
    height: windowHeight/4,
    borderRadius: 15,
    overflow: 'hidden',
  },
  flippedCard: {
    transform: [{ rotateY: '180deg' }],
  },
  cardFace: {
    position: 'absolute',
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    left:0,
    right:0,
    top:0,
    bottom:0
  },
  cardFaceFront: {
    backgroundColor: '#000',
  },
  cardFaceBack: {
    backgroundColor: '#555',
    transform: [{ rotateY: '180deg' }],
  },
  cardLabel: {
    color: 'black',
    fontSize: 12,
  },
  cardValue: {
    color: '#fff',
    fontSize: 16,
    position:'absolute'
  },
  cardHolder:{
    color: '#fff',
    fontSize: 16,
    position:'absolute'
  },
  cardValueFlipped: {
    color: '#fff',
    fontSize: 16,
    position:'absolute',
    transform: [{ scaleX: -1 }],
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    flex:1
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})

export default paymentStyle;
