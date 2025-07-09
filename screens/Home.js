import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Home() {
    return (
        <View>
            <StatusBar barStyle={"dark-content"} />
            <Text>Home screen</Text>
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