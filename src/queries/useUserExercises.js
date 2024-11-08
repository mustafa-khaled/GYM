import { useQuery } from "@tanstack/react-query";
import { getUserExercises } from "../services/exercises";

export function useUserExercises() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userExercises"],
    queryFn: getUserExercises,
  });

  return {
    isLoading,
    data,
    error,
  };
}
