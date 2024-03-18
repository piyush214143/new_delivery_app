import React from 'react';
import mainStyle from '../screen/MainScreen/style';

const Button = ({btnText,btn}) => {
  return (
    <View>
      <TouchableOpacity style={mainStyle.button}>
        <Text style={mainStyle.button}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
