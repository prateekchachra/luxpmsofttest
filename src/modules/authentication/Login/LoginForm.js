//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themeColors } from '../../../utils/theme';


import InputField from '../common/InputField';
// create a component
const LoginForm = ({onValuesChange}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        onValuesChange({
            email, password
        })
    }, [email, password])

    return (
        <View style={styles.container}>
                 <InputField 
                 isLogin
                 label="Email" 
                 iconName="mail"
                 iconSize={24}
          onChange={(val) => setEmail(val)}
          value={email}
          placeholder="john.doe@alphametics.com"/>
              <InputField  
              isLogin
              label="비밀번호" 
              iconName="lock-closed"
              iconSize={24}
          onChange={(val) => setPassword(val)}
          value={password}
          placeholder='●●●●●●●●' />
          <Text style={styles.descriptionTextStyle}>비밀번호 찾기</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: 24
    },
    descriptionTextStyle: {
        alignSelf: 'flex-end',
        color: themeColors.PRIMARY_BLACK,
        fontSize: 14
    }
});

//make this component available to the app
export default LoginForm;
