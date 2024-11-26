import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMealQuantity as updateMealQuantityApi } from "../services/dietsApi";

export function useUpdateMealQuantity() {
  const queryClient = useQueryClient();

  const {
    mutate: updateMealQuantity,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: updateMealQuantityApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["userDietByDate"]);
    },
  });

  return {
    updateMealQuantity,
    isLoading,
    error,
  };
}
