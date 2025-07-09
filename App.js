import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <Text>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
    </SafeAreaView>
  );
}
