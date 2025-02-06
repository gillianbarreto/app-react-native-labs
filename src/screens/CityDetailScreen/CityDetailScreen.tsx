import { Image, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import ScreenWrapper from "@components/wrappers/ScreenWrapper";

export default function CityDetailScreen() {
  const { city, image } = useLocalSearchParams();

  if (!city) return <Redirect href={"/"} />;

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>{city}</Text>
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <Link asChild href={"/"} style={styles.link}>
        <Pressable>
          <Text> Volver al inicio</Text>
        </Pressable>
      </Link>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 80,
    gap: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#144af1",
  },
  link: {
    fontSize: 14,
    fontWeight: 400,
    color: "#144af1",
    cursor: "pointer",
  },
  image: {
    width: 370,
    height: 300,
    borderRadius: 20,
  },
});
