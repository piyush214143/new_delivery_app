import React from 'react';
import { View, Text } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { COLORS } from '../utils/constants';
import ResponsiveSize from '../utils/responsiveSize';

const ToggleComponent = ({ active, onToggle, label, labelStyle }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={labelStyle}>{label}</Text>
      <ToggleSwitch
        isOn={active}
        onToggle={onToggle}
        onColor={COLORS.list}
        offColor={COLORS.grey}
        size="medium"
      />
      {active && (
        <Text
          style={{
            color: COLORS.heading,
            position: 'absolute',
            fontSize: ResponsiveSize(14),
            fontWeight: '500',
          }}>
          Yes
        </Text>
      )}
    </View>
  );
};

export default ToggleComponent;
