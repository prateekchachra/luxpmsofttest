import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {themeColors} from '../../../utils/theme';

import Logo from '../../../assets/images/logo.svg';

import Label from './Label';
import Description from './Description';

export default function Home({navigation}) {

    const onPressLogin = () => {
        navigation.navigate('Login')
    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }
    return (
       <View style={styles.container}>
           
        <Header />

        
        <Logo width={112} height={70}
        style={styles.logoStyle}/>
        <Label />
        <Description />
          <View style={styles.buttonContainerStyle}>
           <Button 
             onPress={onPressLogin}
             label="가입하기"

           />
           <Button 
           isOutlinedButton
           onPress={onPressRegister}
           label="로그인"
           />
           </View>
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: themeColors.PRIMARY_WHITE
    },
    buttonContainerStyle: {
        
        alignItems: 'center',
    },
    logoStyle: {
        marginVertical: 32
    }
  
})
