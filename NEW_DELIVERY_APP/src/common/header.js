import React from 'react';
import {View, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import categoryStyle from '../screen/Categories/style';
import { COLORS, IMAGES } from '../utils/constants';

const Header = ({heading,value,onChangeText,back,search}) => {
  return (
    <View style={categoryStyle.headerContainer}>
      <TouchableOpacity onPress={back}>
        <Image source={IMAGES.arrow} style={categoryStyle.arrow}/>
        </TouchableOpacity>
        <Text style={categoryStyle.heading}>{heading}</Text>

        {!search &&(
          <View style={categoryStyle.searchContainer}>
          <Image source={IMAGES.search} style={categoryStyle.searchIcon} />
          <TextInput
            style={categoryStyle.search}
            onChangeText={onChangeText}
            value={value}
            placeholder="Search"
            placeholderTextColor={COLORS.para}
            keyboardType="web-search"
            maxLength={40}
          />
        </View>)}
      </View>
  );
};

export default Header;