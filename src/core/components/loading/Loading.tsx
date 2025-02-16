import React from "react";
import { ActivityIndicator, Text } from "react-native";
import ScreenWrapper from "@components/wrappers/ScreenWrapper";

export default function Loading() {
  return (
    <ScreenWrapper>
      <ActivityIndicator size="large" color="#144af1" />
      <Text> Cargando....</Text>
    </ScreenWrapper>
  );
}
