import { useQuery } from "@tanstack/react-query";
import { getUserExercises } from "../services/exercises";

export function useUserExercises(selectedDate) {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userExercises", selectedDate],
    queryFn: () => getUserExercises(selectedDate),
  });

  return {
    isLoading,
    exercises: data?.data?.exercises,
    error,
  };
}
