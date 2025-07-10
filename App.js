import { HeaderBackButton } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Result from "./screens/Result";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen
          name="Result"
          component={Result}
          options={({ navigation }) => ({
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                label="Home"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
