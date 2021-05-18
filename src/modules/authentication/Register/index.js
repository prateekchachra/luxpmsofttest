import React from 'react'

import {View, ScrollView, StyleSheet} from 'react-native';


import Header from '../../../components/Header';
import Button from '../../../components/Button';




import AuthLabel from '../common/components/AuthLabel';


import {themeColors} from '../../../utils/theme';
import RegisterForm from './RegisterForm';

// create a component
const Register = ({navigation}) => {

    const  onPressLogin = () => {
        
        navigation.navigate('Login')
    }

    const onPressRegister = () => {
    }

    return (
        <ScrollView contentContainerStyle={styles.containerStyle}>
               <View style={styles.headerContainerStyle}>
            <Header />

            <AuthLabel label="로그인"/>

            <RegisterForm />
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
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        flexGrow: 1,
        backgroundColor: themeColors.PRIMARY_WHITE,
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
