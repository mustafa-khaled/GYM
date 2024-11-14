import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRound as addRoundApi } from "../services/exercises";

export function useAddRound() {
  //   const queryClient = useQueryClient();

  const {
    mutate: addRound,
    isPending: isAddingRound,
    error,
  } = useMutation({
    mutationFn: addRoundApi,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["cities"] });
    // },
  });

  return {
    addRound,
    isAddingRound,
    error,
  };
}
