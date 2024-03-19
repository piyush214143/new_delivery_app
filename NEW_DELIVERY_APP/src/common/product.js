import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import cardStyle from '../screen/Card/style';
import {COLORS, IMAGES} from '../utils/constants';
import ResponsiveSize from '../utils/responsiveSize';

const Product = ({products}) => {
  const [selectedItem, setSelectedItem] = useState();

  const handlePress = itemid => {
    setSelectedItem(itemid === selectedItem ? null : itemid);
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.id;
    return (
      <View style={cardStyle.productContainer}>
        <View style={cardStyle.imageContainer}>
          <Image source={item.image} style={cardStyle.productImage} />
        </View>
        <View style={cardStyle.detailsContainer}>
          <Text style={cardStyle.productName}>{item.productName}</Text>
          <Text style={cardStyle.productPrice}>
            {item.productPrice}
            <Text style={{color: COLORS.para, fontSize: ResponsiveSize(16)}}>
              € / piece
            </Text>
          </Text>
          <View style={cardStyle.iconsContainer}>
            <TouchableOpacity
              onPress={() => handlePress(item.id)}
              style={[
                cardStyle.iconSection,
                {backgroundColor: isSelected ? COLORS.button : COLORS.white},
              ]}>
              <Image
                source={isSelected ? IMAGES.wish : IMAGES.wishclr}
                style={cardStyle.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(item.id)}
              style={[
                cardStyle.iconSection,
                {backgroundColor: !isSelected ? COLORS.button : COLORS.white},
              ]}>
              <Image
                source={isSelected ? IMAGES.shoppingCart : IMAGES.cart}
                style={cardStyle.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Product;
