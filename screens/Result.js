import { StyleSheet, Text, View } from "react-native";

export default function Result() {
  return (
    <View style={styles.container}>
      <Text>Result screen</Text>
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
