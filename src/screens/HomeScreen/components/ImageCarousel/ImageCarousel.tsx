import React from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { City } from "@interfaces/destiny";

interface Props {
  data: City[];
}

export const ImageCarousel = ({ data }: Props) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height / 2;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Image
              style={styles.image}
              source={{ uri: item.imageUrl }}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    gap: 20,
  },
  image: {
    width: 370,
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#21618c",
    marginTop: 10,
  },
});
