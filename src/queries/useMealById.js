import { useQuery } from "@tanstack/react-query";
import { getMealById } from "../services/dietsApi";

export function useMealById(id) {
  const {
    isPending: isLoadingMeal,
    data,
    error,
  } = useQuery({
    queryKey: ["mealById"],
    queryFn: () => getMealById(id),
  });

  return {
    isLoadingMeal,
    meal: data?.data?.meal,
    error,
  };
}
