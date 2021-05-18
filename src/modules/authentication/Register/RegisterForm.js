//import liraries
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import InputField from '../common/InputField';

import PasswordValidator from './PasswordValidator';
import CheckboxInput from './CheckboxInput';
// create a component
const RegisterForm = ({setRegisterFormValues}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
    


    return (
        <View style={styles.container}>
          <InputField label="이름" 
          onChange={(val) => setName(val)}
          value={name}
          placeholder="이채민"/>
          <InputField  label="휴대폰 번호" 
          onChange={(val) => setNumber(val)}
          value={number}
          isNumberField
          placeholder="+82 111 1111111"/>
          <InputField  label="생년월일" 
          onChange={(val) => setDateOfBirth(val)}
          value={dateOfBirth}
          placeholder="mm - dd-yyyy"/>
          <InputField  label="Email" 
          onChange={(val) => setEmail(val)}
          value={email}
          placeholder="john.doe@alphametics.com"/>
          <InputField  label="비밀번호" 
          isPassField
          onChange={(val) => setPassword(val)}
          value={password}
          
          placeholder='●●●●●●●●' />
          <InputField  label="비밀번호 확인" 
          isPassField
          onChange={(val) => setConfirmPassword(val)}
          value={confirmPassword}
          placeholder='○○○○○○○○'/>
          <PasswordValidator password={password}    />
          <CheckboxInput label="이용약관에 동의합니다" 
          value={isAgreedToTerms}
          onPress={() => setIsAgreedToTerms(!isAgreedToTerms)}
          />
          
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
});

//make this component available to the app
export default RegisterForm;
