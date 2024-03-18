import { StyleSheet ,Dimensions} from "react-native";
import { COLORS } from "../../utils/constants";
import ResponsiveSize from "../../utils/responsiveSize";

const windowHeight = Dimensions.get('window').height;

const {width} = Dimensions.get('window');

const cardStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.grey,
        height: windowHeight,
        flexDirection:'column',
        // padding: ResponsiveSize(20),
      },
      itemContainer:{
        backgroundColor:COLORS.list,
        flexDirection:'row',
        marginRight: ResponsiveSize(10),
        height:ResponsiveSize(34),
        borderRadius:ResponsiveSize(100),
        justifyContent:'center',
        alignItems:'center'
      },
      sectionContainer: {
        flexDirection:'column'
      },
      name: {
        fontSize: 16,
      },
});

export default cardStyle;