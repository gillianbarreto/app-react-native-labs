import { getDestinationById } from "@services";
import { useQuery } from "@tanstack/react-query";

export default function useDestination(id: string) {
  const queryDestinationById = useQuery({
    queryKey: ["destination", id],
    queryFn: () => getDestinationById(id),
    staleTime: 3000 * 60 * 60 * 24,  // spinner
  });

  return { queryDestinationById };
}
