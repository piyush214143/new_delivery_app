import React from 'react';
import {Image, View, Text} from 'react-native';
import itemStyle from './style';
import {IMAGES, COLORS} from '../../utils/constants';
import cardStyle from '../Card/style';
import ResponsiveSize from '../../utils/responsiveSize';

const ItemProduct = () => {
  return (
    <View style={itemStyle.container}>
      <Image source={IMAGES.itemVeg} style={itemStyle.background} />
      <View style={itemStyle.bottom}>
        <Text style={itemStyle.itemName}>Boston Lettuce</Text>
        <Text style={itemStyle.productPrice}>
          1.10
          <Text style={{color: COLORS.para, fontSize: ResponsiveSize(24)}}>
            € / piece
          </Text>
        </Text>
        <Text style={itemStyle.quantity}>~ 150 gr / piece</Text>
        <Text style={itemStyle.place}>Spain</Text>
        <Text style={itemStyle.description}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
      </View>
    </View>
  );
};

export default ItemProduct;
