//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { themeColors } from '../../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons'
// create a component



const InputField = ({label, isLogin, placeholder,
    isNumberField,
    isPassField,
    error,
    iconName, iconSize, value, onChange}) => {
    return (
        <View style={styles.container}>
            <Text style={isLogin ? styles.loginLabelStyle :  styles.registerLabelStyle}>{label}</Text>
      
      
        {error? <Text style={styles.errorStyle}>{error}</Text> : null}
        <View style={styles.inputContainerStyle}>
            {iconName ? (
                <Icon name={iconName} color={themeColors.PRIMARY_GRAY} size={iconSize}
                style={styles.iconStyle}/>
            ) : null}
            <TextInput
            value={value} 
            secureTextEntry={isPassField}
            placeholder={placeholder}
            keyboardType={isNumberField ? 'numeric' : 'default'}
            style={isLogin ? styles.loginTextInputStyle :  styles.registerTextInputStyle}
            placeholderTextColor={themeColors.PRIMARY_GRAY}
            onChangeText={onChange}
            />
            </View>
        </View>
    );
};


InputField.defaultProps = {
    onChange: () => {},
    label: '',
    placeholder: '',
    iconSize: 24,
    isLogin: false,
}
// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    inputContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: themeColors.PRIMARY_GRAY,
        borderBottomWidth: 1
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
    iconStyle: {
        marginRight: 8
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
