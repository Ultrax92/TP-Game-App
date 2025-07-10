import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Result() {
  const route = useRoute();
  const { winner, baseNumber, score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        You've
        {winner
          ? ` won baseNumber was ${baseNumber} and score ${score}`
          : ` lost baseNumber was ${baseNumber} and score ${score}`}
      </Text>
      {winner && (
        <LottieView
          autoPlay
          style={{ width: 300, height: 300 }}
          source={require("../assets/winner.json")}
        />
      )}
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
});
