import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeRound as completeRoundApi } from "../services/exercises";

export function useCompleteRound() {
  const queryClient = useQueryClient();

  const {
    mutate: completeRound,
    isPending: isCompleteRoundLoading,
    error,
  } = useMutation({
    mutationFn: completeRoundApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["userExercisesByMuscle"]);
    },
  });

  return {
    completeRound,
    isCompleteRoundLoading,
    error,
  };
}
