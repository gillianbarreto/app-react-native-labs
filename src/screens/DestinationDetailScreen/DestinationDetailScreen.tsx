import React, { useEffect } from "react";
import { Image, Text, StyleSheet, Pressable } from "react-native";
import {
  Link,
  Redirect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

import ScreenWrapper from "@components/wrappers/ScreenWrapper";
import useDestination from "@hooks/useDestination";
import Loading from "@components/loading/Loading";

export default function DestinationDetailScreen() {
  const { destination } = useLocalSearchParams();
  if (!destination) return <Redirect href={"/"} />;

  const navigation = useNavigation();
  const { queryDestinationById } = useDestination(String(destination));

  useEffect(() => {
    navigation.setOptions({ title: queryDestinationById.data?.name });
  }, [queryDestinationById.data]);

  if (queryDestinationById.isLoading) {
    return (<Loading></Loading>);
  }

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.title}>{queryDestinationById.data.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: queryDestinationById.data.image }}
        resizeMode="cover"
      />
      <Text>{queryDestinationById.data?.description}</Text>
      <Text>País: {queryDestinationById.data?.country}</Text>
      <Text>Idiomas: {queryDestinationById.data?.language}</Text>
      <Text>Moneda: {queryDestinationById.data?.currency}</Text>
      <Link asChild href={"/destinations"}>
        <Pressable>
          <Text style={styles.link}>Volver</Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#144af1",
  },
  link: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 400,
    color: "#144af1",
    cursor: "pointer",
    backgroundColor: "#aed6f1",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
  image: {
    width: 370,
    height: 300,
    borderRadius: 20,
  },
});
