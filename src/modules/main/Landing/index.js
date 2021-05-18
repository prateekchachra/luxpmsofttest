//Page to land on after login



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Landing = () => {
    return (
        <View style={styles.container}>
             {/* Empty Page as requested */}
             <Text>Landing Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Landing;
