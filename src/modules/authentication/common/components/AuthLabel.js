//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { themeColors } from '../../../../utils/theme';

// create a component
const AuthLabel = ({label}) => {
    return (
        <Text style={styles.labelStyle}>{label}</Text>

    );
};


AuthLabel.defaultProps = {
    label: ''
}
const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 24, 
        color: themeColors.PRIMARY_BLACK,
        fontWeight: '400'
    }
});


export default AuthLabel;
