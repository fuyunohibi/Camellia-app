import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

function FarmScreen() {

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Farm</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
    }
    
})

export default FarmScreen;
