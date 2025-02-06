import React, { useEffect, useState } from "react";

import { ImageCarousel, ExploreCarousel } from "./components";
import { getTravelDestiny } from "@services/destiny";
import ScreenWrapper from "@components";

export const HomeScreen = () => {
  const title = "MyTinerary";
  const subTitle = "Find your perfect travel itinerary";
  const action = "Explore";

  const [destinies, setDestinies] = useState([]);
  useEffect(() => {
    getTravelDestiny().then((data) => setDestinies(data as []));
  }, []);

  return (
    <ScreenWrapper>
      <ExploreCarousel
        title={title}
        subTitle={subTitle}
        action={action}
      ></ExploreCarousel>
      <ImageCarousel data={destinies}></ImageCarousel>
   </ScreenWrapper>
  );
};
