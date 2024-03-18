import React from "react";
import { View,FlatList, Text} from "react-native";
import cardStyle from "./style";
import Header from "../../common/header";
import VegetablesList from "../../common/vegetablesList";

const Card = (props) => {
    const vegetables1 = [
        { id: 1, name: 'Carrot', num: 43, },
        { id: 2, name: 'Tomato' , num: 21,},
        { id: 3, name: 'Broccoli' , num: 33,},
        { id: 4, name: 'Spinach', num: 45,},
        { id: 5, name: 'Bell Pepper', num: 13, },
      ]; 
      const vegetables2 = [
        { id: 1, name: 'Ladyfingervegetable', num: 43, },
        { id: 2, name: 'Tomato' , num: 21,},
        { id: 3, name: 'Broccoli' , num: 33,},
        { id: 4, name: 'Spinach', num: 45,},
        { id: 5, name: 'Bell Pepper', num: 13, },
      ];     
return(
    <View style={cardStyle.container}>
    <Header heading={'Vegetables'} back={()=>props.navigation.goBack('')}/>
    <View style={cardStyle.sectionContainer}>
    <VegetablesList vegetables={vegetables1} />
    
    </View>
    </View>
)
}

export default Card;