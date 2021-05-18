//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { themeColors } from '../../../utils/theme';

// create a component
const InputField = ({label, isLogin, placeholder, value, onChange}) => {
    return (
        <View style={styles.container}>
            <Text style={isLogin ? styles.loginLabelStyle :  styles.registerLabelStyle}>{label}</Text>
      
      
      
      
            <TextInput
            value={value} 
            placeholder={placeholder}
            style={isLogin ? styles.loginTextInputStyle :  styles.registerTextInputStyle}
            placeholderTextColor={themeColors.PRIMARY_GRAY}
            onChangeText={onChange}
            underlineColorAndroid={themeColors.PRIMARY_GRAY}
            />
        </View>
    );
};


InputField.defaultProps = {
    onChange: () => {},
    label: '',
    placeholder: ''
}
// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    registerLabelStyle: {
        fontSize: 16,
        color: themeColors.SECONDARY_GRAY,
        fontWeight: '400'
    },
    loginLabelStyle: {
        fontSize: 12,
        color: themeColors.PRIMARY_GRAY,
        fontWeight: '400'
    },
    registerTextInputStyle: {
        fontSize: 14,
        fontWeight: '400'
    },
    loginTextInputStyle : {
        fontSize: 16,
        fontWeight: '400'
    }

});

//make this component available to the app
export default InputField;
