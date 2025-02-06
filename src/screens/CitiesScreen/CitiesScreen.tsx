import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { CityCard } from "./components";
import ScreenWrapper from "@components";
import { getTravelDestiny } from "@services";
import { City } from "@interfaces/destiny";

export const CitiesScreen = () => {
  const [destinies, setDestinies] = useState([]);
  useEffect(() => {
    getTravelDestiny().then((data) => setDestinies(data as []));
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={destinies as City[]}
        renderItem={({ item }) => (
          <CityCard name={item.name} image={item.imageUrl}></CityCard>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScreenWrapper>
  );
};
