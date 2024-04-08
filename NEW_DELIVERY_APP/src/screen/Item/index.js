import {React, useState} from 'react';
import {Image, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import itemStyle from './style';
import {IMAGES, COLORS} from '../../utils/constants';
import ResponsiveSize from '../../utils/responsiveSize';
import {SliderBox} from 'react-native-image-slider-box';

const ItemProduct = props => {

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
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <View style={itemStyle.container}>
      <View style={{height:'38%',width:'100%'}}>
      <SliderBox
        images={images}
        
        sliderBoxHeight={'100%'}   
        dotColor="#ffffff"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: ResponsiveSize(10),
          height: ResponsiveSize(10),
          borderRadius: 10 / 2,
          marginBottom: ResponsiveSize(90),
        }}
      />     
      <TouchableOpacity
        onPress={() => props.navigation.goBack('')}
        style={{position: 'absolute',flexDirection:'row',marginLeft: ResponsiveSize(20),alignItems:'center',
        marginTop: ResponsiveSize(60),}}>
        <Image
          source={IMAGES.arrow}
        />
        <Text style={{color:COLORS.white,marginLeft:ResponsiveSize(10)}}>Back</Text>
      </TouchableOpacity>
      </View>
      <View style={itemStyle.bottom}>
        <Text style={itemStyle.itemName}>Boston Lettuce</Text>
        <View style={{justifyContent:'space-around'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={itemStyle.productPrice}>
            1.10
          </Text>
          <Text style={itemStyle.pieceText}>
            € / piece
          </Text>
          </View>
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
        </View>
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
    </ScrollView>
  );
};

export default ItemProduct;