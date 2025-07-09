import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Game() {
    const [choice, setChoice] = useState('');
    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);

    const navigation = useNavigation();
    useEffect(() => {
        if (choice) {
            console.log(` base Number = ${baseNumber} et score = ${score}`);
            const winner =
                (choice === 'higher' && score > baseNumber) ||
                (choice === 'lower' && baseNumber > score);
            Alert.alert(`You've ${winner ? 'won' : 'lost'}`, `You scored: ${score}`);
            navigation.goBack();
        }
    }, [baseNumber, score, choice]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Starting: {baseNumber}</Text>
            <Button onPress={() => setChoice('higher')} title="Higher" />
            <Button onPress={() => setChoice('lower')} title="Lower" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
