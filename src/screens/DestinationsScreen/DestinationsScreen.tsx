import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, TextInput } from "react-native";

import { DestinationCard } from "./components";
import ScreenWrapper from "@components";
import { Destinations } from "@services";
import useDestinations from "@hooks/useDestinations";
import Loading from "@components/loading/Loading";

export const DestinationsScreen = () => {
  const { queryAllDestinations } = useDestinations();
  const [destinations, setDestinations] = useState<Destinations[] | undefined>(
    undefined
  );

  useEffect(() => {
    setDestinations(queryAllDestinations.data || []);
  }, [queryAllDestinations.data]);

  const handleChangeText = (e: string) => {
    const filtered = queryAllDestinations.data?.filter(
      (destination: Destinations) =>
        destination.name.toLowerCase().includes(e.toLowerCase().trim())
    );
    setDestinations(filtered);
  };

  if (queryAllDestinations.isLoading) {
    return (<Loading></Loading>);
  }

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Destinos</Text>
      <TextInput
        style={styles.input}
        placeholder="Busca tu destino..."
        onChangeText={handleChangeText}
      />

      <FlatList
        data={destinations}
        renderItem={({ item }) => (
          <DestinationCard
            id={item._id}
            name={item.name}
            image={item.image}
          ></DestinationCard>
        )}
        keyExtractor={(item) => item._id}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 700,
    color: "#144af1",
  },
  input: {
    borderColor: "#3498db",
    borderRadius: 5,
    borderWidth: 1,
    width: 200,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
