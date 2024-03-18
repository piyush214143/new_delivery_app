import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

const categoryStyle = StyleSheet.create({
   container:{
    backgroundColor:COLORS.white,
   },
   arrow:{
      width:20,
      height:20,position:'absolute'
   }
});

export default categoryStyle;