//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {themeColors} from '../utils/theme'

// create a component
const Button = ({isOutlinedButton,  label, onPress, inlineText}) => {

    
   
   
  return  isOutlinedButton ?  (
        <View style={styles.outlinedContainer}>
            <Text style={styles.outlineTextStyle}>{inlineText}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={inlineText ? styles.outlineLabelWithTextStyle :
                     styles.outlineLabelStyle}>{label}</Text>
            </TouchableOpacity>
        </View>
    ) :  (
        <TouchableOpacity style={styles.defaultContainer}  onPress={onPress}>
            <Text style={styles.defaultTextStyle}>{label}</Text>
        </TouchableOpacity>
    );
};


Button.defaultProps = {
    isOutlinedButton: false,
    label: '',
    onPress: () => {},
    inlineText: ''
}


const styles = StyleSheet.create({
    outlinedContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    defaultContainer: {
       height: 55,
       width: 300,
       borderRadius: 6,
       elevation: 8,
       backgroundColor: themeColors.PRIMARY_COLOR,
       justifyContent: 'center',
       alignItems: 'center'
    },
    outlineLabelStyle: {
        color: themeColors.PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '400'
    },

    outlineLabelWithTextStyle: {
        color: themeColors.SECONDARY_GRAY,
        fontSize: 14,
        textDecorationColor: themeColors.PRIMARY_COLOR,
        textDecorationLine: "underline"
    },
    outlineTextStyle: {
            color: themeColors.SECONDARY_GRAY,
            fontSize: 14
    },
    defaultTextStyle: {
            color: themeColors.PRIMARY_WHITE,
            fontSize: 16
    }

});

export default Button;
