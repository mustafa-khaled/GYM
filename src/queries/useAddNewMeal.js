import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewMeal as addNewMealApi } from "../services/dietsApi";

export function useUpdateMealQuantity() {
  const queryClient = useQueryClient();

  const {
    mutate: addNewMeal,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: addNewMealApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["userDietByDate"]);
    },
  });

  return {
    addNewMeal,
    isLoading,
    error,
  };
}
