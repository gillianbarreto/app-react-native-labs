import { Stack } from "expo-router";
import { Provider } from "react-redux";

import { store } from "@store/store";
import { StatusBar } from "react-native";

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar />
    </Provider>
  );
}
