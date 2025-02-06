import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { HomeScreen } from "@screens";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
