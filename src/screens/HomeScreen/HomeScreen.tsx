import React, { useEffect, useState } from "react";

import { ImageCarousel, ExploreCarousel } from "./components";
import ScreenWrapper from "@components";
import useDestinations from "src/store/hooks/useDestinations";
import { Destinations } from "@services";
import Loading from "@components/loading/Loading";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const HomeScreen = () => {
  const title = "MyTinerary";
  const subTitle = "Find your perfect travel itinerary";
  const action = "Explore";

  const { queryAllDestinations } = useDestinations();
  const [destinations, setDestinations] = useState<Destinations[]>([]);

  useEffect(() => {
    setDestinations(queryAllDestinations.data || []);
  }, [queryAllDestinations.data]);

  if (queryAllDestinations.isLoading) {
    return (<Loading></Loading>);
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenWrapper>
        <ExploreCarousel
          title={title}
          subTitle={subTitle}
          action={action}
        ></ExploreCarousel>
        <ImageCarousel data={destinations}></ImageCarousel>
      </ScreenWrapper>
    </QueryClientProvider>
  );
};
