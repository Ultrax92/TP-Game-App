import { useNavigation } from "@react-navigation/native";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();

  function onLongPress(e) {
    if (e.nativeEvent.state === State.ACTIVE) {
      navigation.navigate("Game");
    }
  }

  function onTap(e) {
    if (e.nativeEvent.state === State.ACTIVE) {
      Alert.alert("Long press to start the game");
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <TapGestureHandler onHandlerStateChange={onTap}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={600}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start game !</Text>
            </View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
    fontSize: 48,
  },
});
