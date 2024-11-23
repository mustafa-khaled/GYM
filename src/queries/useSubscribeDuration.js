import { useQuery } from "@tanstack/react-query";
import { subscribeDuration } from "../services/apiAuth";

export function useSubscribeDuration() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["subscribeDuration"],
    queryFn: subscribeDuration,
  });

  return {
    isLoading,
    data: data?.data,
    error,
  };
}
