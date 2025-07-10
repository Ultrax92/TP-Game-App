import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
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
      navigation.navigate("Result", {
        winner,
        baseNumber,
        score,
      });
    }
  }, [baseNumber, score, choice, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.baseNumber}>N° de base: {baseNumber}</Text>
      <AnimatedButton
        action="higher"
        label="Supérieur"
        onPress={() => setChoice("higher")}
      ></AnimatedButton>
      <AnimatedButton
        action="lower"
        label="Inférieur"
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
    fontSize: 36,
    marginBottom: 30,
  },
});
