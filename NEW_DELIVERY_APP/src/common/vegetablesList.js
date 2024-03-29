import {React, useState} from 'react';
import { Text, FlatList, TouchableOpacity, Image} from 'react-native';
import cardStyle from '../screen/Card/style';
import {COLORS, IMAGES} from '../utils/constants';

const VegetablesList = ({vegetables}) => {
  const [selectedItem, setSelectedItem] = useState();

  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.id;
    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(isSelected ? null : item.id)}
        style={[
          cardStyle.itemContainer,
          {backgroundColor: isSelected ? COLORS.list : COLORS.white},
          {width: item.name.length * 10 + 65},
        ]}>
        {isSelected ? (
          <>
            <Image source={IMAGES.tick} style={cardStyle.image} />
            <Text style={[cardStyle.name, {color: COLORS.darkPurple}]}>
              {item.name}
            </Text>
            <Text style={[cardStyle.items, {color: COLORS.darkPurple}]}>
              ({item.num})
            </Text>
          </>
        ) : (
          <>
            <Text style={[cardStyle.name, {color: COLORS.para}]}>
              {item.name}
            </Text>
            <Text style={[cardStyle.items, {color: COLORS.para}]}>
              ({item.num})
            </Text>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={vegetables}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default VegetablesList;
