import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');

const ResponsiveSize = size => {
  return RFValue(size, height);
};

export const ResponsiveSizeTablet = size => {
  return RFValue(size, height > width ? width : height);
};

export default ResponsiveSize;