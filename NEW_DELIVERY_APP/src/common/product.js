import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import cardStyle from '../screen/Card/style';
import { COLORS, IMAGES } from '../utils/constants';
import ResponsiveSize from '../utils/responsiveSize';

const Product = ({ products, details }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handlePress = (index) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(index)) {
      newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
    } else {
      newSelectedItems.push(index);
    }
    setSelectedItems(newSelectedItems);
  };

  const renderItem = ({ item, index }) => {
    const isSelected = selectedItems.includes(index);
    return (
      <View style={[cardStyle.productContainer, isSelected && cardStyle.selectedItem]}>
        <TouchableOpacity onPress={details} style={cardStyle.imageContainer}>
          <Image source={item.image} style={cardStyle.productImage} />
        </TouchableOpacity>
        <View style={cardStyle.detailsContainer}>
          <Text style={cardStyle.productName}>{item.productName}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={cardStyle.productPrice}>
              {item.productPrice}
            </Text>
            <Text style={cardStyle.pieceText}>
              € / piece
            </Text>
          </View>
          <View style={cardStyle.iconsContainer}>
            <TouchableOpacity
              onPress={() => handlePress(index)}
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
              onPress={() => handlePress(index)}
              style={[
                cardStyle.iconSection,
                // !isSelected ? cardStyle.selectedIcon : cardStyle.unselectedIcon,
                 {backgroundColor: !isSelected ? COLORS.button : COLORS.white},
              ]}>
              <Image
                source={!isSelected ? IMAGES.cart : IMAGES.shoppingCart}
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
      keyExtractor={(item, index) => index.toString()} 
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Product;
