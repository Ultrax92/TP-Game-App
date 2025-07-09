import React from 'react';
import { StyleSheet, Button, View, StatusBar } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Button onPress={() => navigation.navigate('Game')} title="Start game!" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
