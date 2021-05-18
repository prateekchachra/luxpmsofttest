//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { themeColors } from '../../../utils/theme';

// create a component
const Label = () => {
    return (
        <Text style={styles.labelStyle}>Stay on the top <Text style={styles.boldLabelStyle}>of your finance</Text></Text>
  
    );
};

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 24, 
        color: themeColors.SECONDARY_GRAY,
        fontWeight: '400'
    },
    boldLabelStyle: {
        fontWeight: '700'
    }
});

export default Label;
