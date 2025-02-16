export interface ApiResponse {
  status: number;
  data: Destinations[];
}

export interface Destinations {
  _id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  currency: string;
  language: string;
  averageRating: number;
  itineraries: string[];
}
