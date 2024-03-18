import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import categoryStyle from '../screen/Categories/style';
import { IMAGES } from '../utils/constants';

const Header = ({heading,value,onChangeText}) => {
  return (
    <View style={categoryStyle.headerContainer}>
        <Image source={IMAGES.arrow} style={categoryStyle.arrow} />
        <Text style={categoryStyle.heading}>{heading}</Text>
        <View style={categoryStyle.searchContainer}>
          <Image source={IMAGES.search} style={categoryStyle.searchIcon} />
          <TextInput
            style={categoryStyle.search}
            onChangeText={onChangeText}
            value={value}
            placeholder="Search"
            keyboardType="web-search"
          />
        </View>
      </View>
  );
};

export default Header;