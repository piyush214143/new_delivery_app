import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import cardStyle from '../screen/Card/style';
import { COLORS, IMAGES } from '../utils/constants';
import ResponsiveSize from '../utils/responsiveSize';

const VegetablesList = ({ vegetables }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => toggleItemSelection(item.id)}
        style={[
          cardStyle.itemContainer,
          { backgroundColor: isSelected ? COLORS.list : COLORS.white },
          {
            width:
              item.name.length * ResponsiveSize(10) + ResponsiveSize(100),
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
          }}
        >
          {isSelected && (
            <Image source={IMAGES.tick} style={cardStyle.image} />
          )}
          <Text
            style={[
              cardStyle.name,
              { color: isSelected ? COLORS.darkPurple : COLORS.para },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              cardStyle.items,
              { color: isSelected ? COLORS.darkPurple : COLORS.para },
            ]}
          >
            ({item.num})
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={vegetables}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default VegetablesList;
