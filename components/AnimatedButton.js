import { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableHighlight } from "react-native";

export default function AnimatedButton({ action, onPress, label }) {
  const opacity = useRef(new Animated.Value(1));

  return (
    <TouchableHighlight
      onPress={() => {
        Animated.timing(opacity.current, {
          toValue: 0.2,
          duration: 800,
          useNativeDriver: true,
        }).start(() => onPress());
      }}
    >
      <Animated.View
        style={[
          styles.button,
          action === "higher" ? styles.buttonGreen : styles.buttonRed,
          { opacity: opacity.current },
        ]}
      >
        <Text style={styles.buttonText}>{label ?? action}</Text>
      </Animated.View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: 30,
    marginVertical: 15,
  },
  buttonRed: {
    backgroundColor: "red",
  },
  buttonGreen: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    textTransform: "capitalize",
  },
});
