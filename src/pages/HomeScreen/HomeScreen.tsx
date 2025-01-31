import React, { useEffect, useState } from "react";

import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import { getTravelDestiny } from "../../services/destiny";
import { ExploreCarousel } from "../../components/ExploreCarousel/ExploreCarousel";

export const HomeScreen = () => {
  const title = "MyTinerary";
  const subTitle = "Find your perfect travel itinerary";
  const action = "Explore";

  const [destinies, setDestinies] = useState([]);
  useEffect(() => {
    getTravelDestiny().then((data) => setDestinies(data as []));
  }, []);

  return (
    <>
      <ExploreCarousel
        title={title}
        subTitle={subTitle}
        action={action}
      ></ExploreCarousel>
      <ImageCarousel data={destinies}></ImageCarousel>
    </>
  );
};
