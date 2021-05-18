//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { themeColors } from '../utils/theme';

// create a component
const CheckBox = ({rounded = false, size = 18, value = false,
     disabled = false, onPress = () => {}}) => {
    return (
        <TouchableOpacity
        disabled={disabled}
        style={{
            backgroundColor: value ? themeColors.PRIMARY_COLOR : themeColors.PRIMARY_GRAY,
            justifyContent: 'center',
            alignItems: 'center',
            height: size,
            width: size,
            borderRadius: rounded ? size : 6
        }} 
        onPress={onPress}>
            <Text style={{color: themeColors.PRIMARY_WHITE, fontSize: 12}}>✓</Text>
        </TouchableOpacity>
    );
};

export default CheckBox;
