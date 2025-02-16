import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "@services";

export default function useDestinations() {
  const queryAllDestinations = useQuery({
    queryKey: ["destinations"],
    queryFn: getDestinations,
    staleTime: 3000 * 60 * 60 * 24,  // spinner
  });

  return { queryAllDestinations };
}
