import React from 'react'
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import AuthLabel from '../common/components/AuthLabel';

import {themeColors} from '../../../utils/theme';

import LoginForm from './LoginForm'


export default function Login({navigation}) {


   const  onPressLogin = () => {

    Toast.show({
        text1: '성공적 로그인!',
        text2: '집으로 안내',
        visibilityTime: 1000,
        onHide: () => {
            navigation.navigate('Landing')
        }
      });

    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }
    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerContainerStyle}>
            <Header />

        <AuthLabel label="로그인"/>
        <LoginForm />
        </View>
            <View style={styles.buttonContainerStyle}>
           <Button 
             onPress={onPressLogin}
             label="로그인"

           />
           <Button 
           isOutlinedButton
           onPress={onPressRegister}
           inlineText="계정이 없으신가요? "
           label="가입하기"
           />
           </View>
        </View>
    )
}


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
})