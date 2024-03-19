import React from 'react';
import {Image, View} from 'react-native';
import cardStyle from './style';
import Header from '../../common/header';
import VegetablesList from '../../common/vegetablesList';
import {IMAGES} from '../../utils/constants';
import Product from '../../common/product';

const Card = props => {
  const vegetables1 = [
    {id: 1, name: 'Carrot', num: 43},
    {id: 2, name: 'Tomato', num: 21},
    {id: 3, name: 'Broccoli', num: 33},
    {id: 4, name: 'Spinach', num: 45},
    {id: 5, name: 'Bell Pepper', num: 13},
  ];
  const vegetables2 = [
    {id: 1, name: 'Carrot', num: 43},
    {id: 2, name: 'Tomato', num: 21},
    {id: 3, name: 'Broccoli', num: 33},
    {id: 4, name: 'Spinach', num: 45},
    {id: 5, name: 'Bell Pepper', num: 13},
  ];

  const products = [
    {
      id: '1',
      productName: 'Boston Lettuce',
      productPrice: '1.10',
      image: IMAGES.veg,
    },
    {
      id: '2',
      productName: 'Purple Cauliflower',
      productPrice: '1.85',
      image: IMAGES.veg2,
    },
    {
      id: '3',
      productName: 'Savoy Cabbage',
      productPrice: '1.45',
      image: IMAGES.veg3,
    },
  ];

  return(
    <View style={cardStyle.container}>
      <Image source={IMAGES.bgImage} style={cardStyle.bGImage}/>
      <Header heading={'Vegetables'} back={() => props.navigation.goBack('')} />
      <View style={cardStyle.sectionContainer}>
        <VegetablesList vegetables={vegetables1} />
        <VegetablesList vegetables={vegetables2} />
        <Product products={products} />
      </View>
    </View>
  );
};

export default Card;
