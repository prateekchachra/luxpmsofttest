//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '../../../components/CheckBox';
import { themeColors } from '../../../utils/theme';

const RULES_DEFAULT = [
    {
    rule: '최소 8자 이상',
    validationFunction: (password) => {
        return password.length > 8
    },

    value: false
    },
    {
    rule: '최소 하나의 대문자',
    validationFunction: (password) => {
        let hasUpperCaseChar = false;
        if(password){
        for (var i = 0; i < password.length; i++){
            let currentChar = password.charAt(i)

            //Special char ka case
            if(currentChar.toUpperCase() === currentChar){
                hasUpperCaseChar = true;
                break;
            }
        }
     }   
     return hasUpperCaseChar;
    },
    value: false
    },
    {
    rule: '최소 하나의 숫자',
    validationFunction: (password) => { return false },
    value: false
    },
    {
    rule: '최소 하나의 특수문자',
    validationFunction: (password) => { return false },
    value: false
    },
]


const PasswordValidator = ({password}) => {


    const [rules, setRules] = useState(RULES_DEFAULT)



    useEffect(() => {
    
       setRules(rules.map(rule =>{
           
        rule.value = rule.validationFunction(password);
        return rule;
    }))
    }, [password])

    const Rule = ({rule}) => (
        <View style={styles.ruleStyle}>
    
       <CheckBox 
        rounded
        value={rule.value}
        disabled
       />
           <Text style={styles.ruleLabelStyle}>{rule.rule}</Text>   
       </View>
    )
   const  renderRules = () => {

        let gridJsx = [];

        for(var i = 0; i < rules.length / 2; i++){
            gridJsx.push((
                <View style={styles.rowStyle} key={(i*2).toString()}>
                  
                        <Rule rule={rules[i*2]}/>
                        <Rule rule={rules[i*2 + 1]}/>
                </View>
            ))
        }

        return gridJsx;
    }
    return (
        <View style={styles.container}>
          {renderRules()}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    ruleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 12
    },
    ruleLabelStyle: {
        marginLeft: 16,
        fontSize: 11,
        color: themeColors.PRIMARY_GRAY
    }
});

//make this component available to the app
export default PasswordValidator;
