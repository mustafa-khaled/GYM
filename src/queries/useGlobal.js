import { useQuery } from "@tanstack/react-query";
import { getGlobalData } from "../services/apiGlobal";

export function useGlobal() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["global"],
    queryFn: getGlobalData,
  });

  return {
    isLoading,
    diet: data?.data?.diet,
    fqs: data?.data?.fqs,
    packages: data?.data?.packages,
    slogan: data?.data?.slogan,
    transitions: data?.data?.transitions,
    error,
  };
}
