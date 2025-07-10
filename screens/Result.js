import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Result() {
  const route = useRoute();
  const { winner, baseNumber, score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {winner
          ? `GAGNÉ \nVotre numéro de base était ${baseNumber} et votre score ${score}`
          : `PERDU \nVotre numéro de base était ${baseNumber} et votre score ${score}`}
      </Text>
      <LottieView
        autoPlay
        style={{ width: 300, height: 300 }}
        source={
          winner
            ? require("../assets/winner.json")
            : require("../assets/loser.json")
        }
      />
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
  message: {
    textAlign: "center",
    fontSize: 16,
  },
});
