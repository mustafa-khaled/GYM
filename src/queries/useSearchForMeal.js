import { useMutation } from "@tanstack/react-query";
import { searchForMeal as searchForMealApi } from "../services/dietsApi";

export function useSearchForMeal() {
  const {
    mutate: searchForMeal,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: searchForMealApi,
  });

  return {
    searchForMeal,
    isLoading,
    error,
  };
}
