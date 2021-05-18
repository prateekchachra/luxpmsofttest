
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tagline from '../assets/images/tagline.svg';


const Header = () => {
    return (
        <View style={styles.container}>

            <Tagline width={170} height={28} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       marginVertical: 60,
       alignItems: 'center'
    },
});

export default Header;
