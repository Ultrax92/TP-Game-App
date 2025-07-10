import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import AnimatedButton from "../components/AnimatedButton";
export default function Game() {
  const [choice, setChoice] = useState("");
  const [baseNumber] = useState(() => Math.floor(Math.random() * 100));
  const [score] = useState(() => Math.floor(Math.random() * 100));

  const navigation = useNavigation();
  useEffect(() => {
    if (choice) {
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);
      Alert.alert(`You've ${winner ? "won" : "lost"}`, `You scored: ${score}`);
      navigation.navigate("Result", {
        winner,
        baseNumber,
        score,
      });
      console.log(
        ` base Number = ${baseNumber} et score = ${score}, le pari est ${winner}`
      );
    }
  }, [baseNumber, score, choice, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>
      <AnimatedButton
        action="higher"
        onPress={() => setChoice("higher")}
      ></AnimatedButton>
      <AnimatedButton
        action="lower"
        onPress={() => setChoice("lower")}
      ></AnimatedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  baseNumber: {
    fontSize: 48,
    marginBottom: 30,
  },
});
