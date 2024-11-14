import { useQuery } from "@tanstack/react-query";
import { getUserExerciseByMuscle } from "../services/exercises";

export function useUserExercisesByMuscle(exerciseId) {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userExercisesByMuscle", exerciseId],
    queryFn: () => getUserExerciseByMuscle(exerciseId),
    enabled: !!exerciseId,
  });

  return {
    isLoading,
    exerciseDetails: data?.data?.exercise,
    error,
  };
}
