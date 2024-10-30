import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../services/goals";

export function useGoals() {
  const {
    isPending: goalsLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  const goals = data?.data?.goals.map((goal) => ({
    value: goal.id,
    title: goal.name,
  }));

  return {
    goalsLoading,
    goals,
    error,
  };
}
