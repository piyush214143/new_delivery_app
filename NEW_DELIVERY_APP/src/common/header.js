import React from 'react';
import {View, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import categoryStyle from '../screen/Categories/style';
import { IMAGES } from '../utils/constants';

const Header = ({heading,value,onChangeText,back}) => {
  return (
    <View style={categoryStyle.headerContainer}>
      <TouchableOpacity onPress={back}>
        <Image source={IMAGES.arrow} style={categoryStyle.arrow}/>
        </TouchableOpacity>
        <Text style={categoryStyle.heading}>{heading}</Text>
        <View style={categoryStyle.searchContainer}>
          <Image source={IMAGES.search} style={categoryStyle.searchIcon} />
          <TextInput
            style={categoryStyle.search}
            onChangeText={onChangeText}
            value={value}
            placeholder="Search"
            keyboardType="web-search"
            maxLength={40}
          />
        </View>
      </View>
  );
};

export default Header;