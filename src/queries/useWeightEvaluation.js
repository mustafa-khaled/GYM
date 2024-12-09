import { useQuery } from "@tanstack/react-query";
import { getWeightEvaluation } from "../services/notificationsApi";

export function useWeightEvaluation() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["WeightEvaluation"],
    queryFn: getWeightEvaluation,
  });

  return {
    isLoading,
    exercises: data?.data?.exercises,
    error,
  };
}
