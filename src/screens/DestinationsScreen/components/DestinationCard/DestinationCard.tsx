import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

interface Props {
  id: string;
  name: string;
  image: string;
}

export const DestinationCard = ({ id, name, image }: Props) => {
  return (
    <Link
      key={id}
      asChild
      href={{
        pathname: `/${id}`,
      }}
    >
      <Pressable>
        <View style={styles.card}>
          <Text style={styles.title}>{name}</Text>
          <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="cover"
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
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#144af1",
    marginBottom: 5,
  },
  image: {
    width: 185,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#f2f3f4",
  },
});
