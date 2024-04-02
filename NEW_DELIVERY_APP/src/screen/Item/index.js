import {React, useState} from 'react';
import {Image, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import itemStyle from './style';
import {IMAGES, COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';
import {SliderBox} from 'react-native-image-slider-box';

const ItemProduct = props => {
  const windowHeight = Dimensions.get('window').height;
  const [selectedItem, setSelectedItem] = useState();
  const [images, setImages] = useState([
    IMAGES.itemVeg,
    IMAGES.veg2,
    IMAGES.veg3,
  ]);

  const handlePress = () => {
    setSelectedItem(!selectedItem);
  };

  const isSelected = selectedItem;

  return (
    <View style={itemStyle.container}>
      <SliderBox
        images={images}
        sliderBoxHeight={windowHeight * 0.37}
        dotColor="#ffffff"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10 / 2,
          marginBottom: ResponsiveSize(70),
        }}
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack('')}
        style={{position: 'absolute',flexDirection:'row',marginLeft: ResponsiveSize(20),
        marginTop: ResponsiveSize(60),}}>
        <Image
          source={IMAGES.arrow}
        />
        <Text style={{color:COLORS.white,marginLeft:ResponsiveSize(10)}}>Back</Text>
      </TouchableOpacity>
      <View style={itemStyle.bottom}>
        <Text style={itemStyle.itemName}>Boston Lettuce</Text>
        <View>
          <View style={{flexDirection:'row',alignItems:'center',paddingBottom: '5%',}}>
          <Text style={itemStyle.productPrice}>
            1.10
          </Text>
          <Text style={itemStyle.pieceText}>
            € / piece
          </Text>
          </View>
          {/* <Text style={itemStyle.productPrice}>
            1.10
            <Text
              style={{
                color: COLORS.para,
                fontSize: ResponsiveSize(24),
                fontWeight: '400',
              }}>
              € / piece
            </Text>
          </Text> */}
          <Text style={itemStyle.quantity}>~ 150 gr / piece</Text>
        </View>
        <Text style={itemStyle.place}>Spain</Text>
        <Text style={itemStyle.description}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={itemStyle.iconsContainer}>
          <TouchableOpacity
            onPress={() => handlePress()}
            style={[
              itemStyle.icon1Section,
              {backgroundColor: isSelected ? COLORS.button : COLORS.white},
            ]}>
            <Image
              source={isSelected ? IMAGES.wish : IMAGES.wishclr}
              style={itemStyle.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress()}
            style={[
              itemStyle.icon2Section,
              {backgroundColor: !isSelected ? COLORS.button : COLORS.white},
            ]}>
            <Image
              source={isSelected ? IMAGES.shoppingCart : IMAGES.cart}
              style={itemStyle.icon}
            />
            <Text
              style={[
                itemStyle.add,
                {color: !isSelected ? COLORS.white : COLORS.para},
              ]}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
