import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#336eff" />,
        }}
      />
      <Tabs.Screen
        name="cities"
        options={{
          title: "Ciudades",
          tabBarIcon: () => <Ionicons name="image" size={24} color="#336eff"/>,
        }}
      />
    </Tabs>
  );
}
