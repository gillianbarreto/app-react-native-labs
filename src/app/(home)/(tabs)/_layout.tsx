import { Tabs } from "expo-router";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import UserAuthGuard from "@guards/UserAuthGuard";

export default function DestinationsLayout() {
  return (
    <UserAuthGuard>
      <>
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: () => (
                <Ionicons name="home" size={24} color="#336eff" />
              ),
            }}
          />
          <Tabs.Screen
            name="destinations"
            options={{
              title: "Destinos",
              tabBarIcon: () => (
                <Ionicons name="image" size={24} color="#336eff" />
              ),
            }}
          />
        </Tabs>
      </>
    </UserAuthGuard>
  );
}
