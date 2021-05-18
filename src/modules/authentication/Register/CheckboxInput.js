//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '../../../components/CheckBox';
import { themeColors } from '../../../utils/theme';

// create a component
const CheckboxInput = ({label = '', onPress = () => {},
value = false}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={styles.container}>



            <CheckBox 
            size={20}
            onPress={onPress}
            value={value}
            />
            <Text style={styles.textLabelStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 24
    },
    textLabelStyle: {
        fontSize: 12,
        marginLeft: 12,
        color: themeColors.PRIMARY_GRAY
    }
});

//make this component available to the app
export default CheckboxInput;
