import React from "react";
import { View,Image } from "react-native";
import categoryStyle from "./style";
import { IMAGES } from "../../utils/constants";

const Categories = () => {
return(
    <View style={categoryStyle.container}>
   <Image source={IMAGES.arrow} style={categoryStyle.arrow}/>
    </View>
)
}

export default Categories;