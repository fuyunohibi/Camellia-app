import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Alert } from 'react-native';

function HomeScreen() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button
            title="Press me"
            onPress={() => Alert.alert('Ruk P\'DA Na kub')}
            />
        </ScrollView>
    );
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
    },
})

export default HomeScreen;