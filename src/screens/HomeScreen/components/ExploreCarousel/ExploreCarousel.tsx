import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface Props {
  title: string;
  subTitle: string;
  action: string;
}

export const ExploreCarousel = ({ title, subTitle, action }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>{action}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 80,
    gap: 5,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#144af1",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#144af1",
  },
  button: {
    backgroundColor: "#27ae60",
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 700,
  },
});
