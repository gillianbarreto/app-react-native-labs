import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

interface Props {
  name: string;
  image: string;
}

export const CityCard = ({ name, image }: Props) => {
  return (
    <Link
      key={name}
      asChild
      href={{
        pathname: `/${name}`,
        params: { image },
      }}
    >
      <Pressable>
        <View style={styles.card}>
          <Text style={styles.title}>{name}</Text>
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    cursor: "pointer",
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#21618c",
    marginBottom: 10,
  },
  image: {
    width: 185,
    height: 150,
    borderRadius: 10,
  },
});
