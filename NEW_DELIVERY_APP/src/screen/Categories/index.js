import {React, useState} from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import categoryStyle from './style';
import Header from '../../common/header';
import {IMAGES} from '../../utils/constants';

const Categories = (props) => {

  const handleCard = () => {
    props.navigation.navigate('Card');
  };

  const [text, onChangeText] = useState('');

  const categoriesData = [
    {
      id: '1',
      name: 'Vegetables',
      image: IMAGES.item1,
      num: 43,
    },
    {
      id: '2',
      name: 'Fruits',
      image: IMAGES.item2,
      num: 32,
    },
    {
      id: '3',
      name: 'Bread',
      image: IMAGES.item3,
      num: 22,
    },
    {
      id: '4',
      name: 'Sweets',
      image: IMAGES.item4,
      num: 56,
    },
    {
      id: '5',
      name: 'Thread',
      image: IMAGES.item5,
      num: 21,
    },
    {
      id: '6',
      name: 'Tea',
      image: IMAGES.item6,
      num: 45,
    },
  ];

  const CategoryItem = ({image, name, num}) => (
    <View style={categoryStyle.itemContainer}>
      <View style={categoryStyle.card}>
        <TouchableOpacity onPress={handleCard}>
          <Image source={image} style={categoryStyle.image} />
        </TouchableOpacity>
        <Text style={categoryStyle.name}>{name}</Text>
        <Text style={categoryStyle.items}>({num})</Text>
      </View>
    </View>
  );

  return (
    <View style={categoryStyle.container}>
      <Header heading={'Categories'} value={text} onChangeText={onChangeText} />
      <FlatList
        data={categoriesData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CategoryItem image={item.image} name={item.name} num={item.num} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;
