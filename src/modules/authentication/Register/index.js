import React from 'react'

import {View, Text, StyleSheet} from 'react-native';


import Header from '../../../components/Header';
import Button from '../../../components/Button';




import AuthLabel from '../common/components/AuthLabel';


import {themeColors} from '../../../utils/theme';

// create a component
const Register = ({navigation}) => {

    const  onPressLogin = () => {
        
        navigation.navigate('Login')
    }

    const onPressRegister = () => {
    }

    return (
        <View style={styles.containerStyle}>
               <View style={styles.headerContainerStyle}>
            <Header />

            <AuthLabel label="로그인"/>
            </View>
                <View style={styles.buttonContainerStyle}>
                <Button 
                onPress={onPressRegister}
                label="가입하기"

                />
                <Button 
                isOutlinedButton
                onPress={onPressLogin}
                inlineText="이미 계정이 있으신가요? "
                label="로그인"
                />
                    </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: themeColors.PRIMARY_WHITE,
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainerStyle: {
        alignItems: 'center'
    },
    headerContainerStyle: {
        alignItems: 'center'
    },
});

//make this component available to the app
export default Register;
