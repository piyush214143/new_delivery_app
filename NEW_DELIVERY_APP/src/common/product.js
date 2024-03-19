import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const product = ({ item }) => {

  return (
    <View style={styles.productContainer}>
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.productName}</Text>
        <Text style={styles.price}>{item.productPrice}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
          <Image source={item.image} style={styles.productImage} />
          </TouchableOpacity>
          <TouchableOpacity >
          <Image source={item.image} style={styles.productImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ProductsList = ({ data }) => {
  const renderItem = ({ item }) => <ProductItem item={item} />;

  return (
    <FlatList
      data={product}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  imageContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});
