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
    muscleName: data?.data?.exercises?.[0]?.muscle?.name,
    muscleImage: data?.data?.exercises?.[0]?.image,
    exercises: data?.data?.exercises,
    error,
  };
}
