import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import AuthLabel from '../common/components/AuthLabel';

import {themeColors} from '../../../utils/theme';

import {accounts} from '../../../constants/accounts';
import LoginForm from './LoginForm'


export default function Login({navigation}) {

    
    const [valuesFromForm, setValuesFromForm]  = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState(null)

   const  onPressLogin = () => {



    let isAccountInDB = accounts.filter(account => account.password === 
        valuesFromForm?.password && account.email === valuesFromForm?.email).length > 0;

        if(isAccountInDB){
                Toast.show({
        text1: '성공적 로그인!',
        text2: '집으로 안내',
        visibilityTime: 1000,
        onHide: () => {
            navigation.navigate('Landing')
        }
      });
        }
        else {
            setErrors({loginError: 'Invalid credentials. Try again'})
        }


    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }

    const onValuesChange = (values) => {
        setValuesFromForm(values);
        setErrors(null);
    };

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerContainerStyle}>
            <Header />

        <AuthLabel label="로그인"/>
        <LoginForm onValuesChange={onValuesChange}
        errors={errors}/>
        </View>
            <View style={styles.buttonContainerStyle}>
                {errors && errors.loginError ? <Text></Text> : null}
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