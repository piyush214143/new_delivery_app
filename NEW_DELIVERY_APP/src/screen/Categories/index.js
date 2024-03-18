import {React, useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import categoryStyle from './style';
import {IMAGES} from '../../utils/constants';

const Categories = () => {
  const [text, onChangeText] = useState('');

  return (
    <View style={categoryStyle.container}>
      <View style={categoryStyle.headerContainer}>
        <Image source={IMAGES.arrow} style={categoryStyle.arrow} />
        <Text style={categoryStyle.heading}>Categories</Text>
        <View style={categoryStyle.searchContainer}>
          <Image source={IMAGES.search} style={categoryStyle.searchIcon} />
          <TextInput
            style={categoryStyle.search}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
            keyboardType="web-search"
          />
        </View>
      </View>
    </View>
  );
};

export default Categories;
