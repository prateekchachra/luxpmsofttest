//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themeColors } from '../../../utils/theme';

// create a component
const Description = () => {
    return (
        <View style={styles.descriptionContainerStyle}>
        <Text style={styles.descriptionStyle}>Lorem ipsum dolor sit amet,
        <Text style={styles.boldDescriptionStyle}> consetetur sadipscing elitr, sed diam </Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({

    descriptionContainerStyle: {
        marginHorizontal: 48
    },  
    descriptionStyle: {
        fontSize: 14, 
        color: themeColors.SECONDARY_GRAY,
        fontWeight: '400'
    },
    boldDescriptionStyle: {
        fontWeight: '700'
    }
});


//make this component available to the app
export default Description;
