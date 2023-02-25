import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Screen1 from "./screens/Screen1/Screen1";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Screen1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "center",
  },
});
