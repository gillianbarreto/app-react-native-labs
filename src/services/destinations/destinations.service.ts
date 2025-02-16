import { destinationsApi } from "./api";
import { Destinations, ApiResponse } from "./types";

export const getDestinations = async (): Promise<Destinations[]> => {
  try {
    const { data } = await destinationsApi.get<ApiResponse>("cities");
    return data.data;
  } catch (error) {
    console.log(error);
    throw "Error al cargar los destinos";
  }
};

export const getDestinationById = async (id: string) => {
  try {
    const { data } = await destinationsApi.get("/cities/" + id);
    return data.data;
  } catch (error) {
    console.log(error);
    throw "Error al cargar el destino";
  }
};
