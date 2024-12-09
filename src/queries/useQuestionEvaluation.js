import { useQuery } from "@tanstack/react-query";
import { getQuestionEvaluation } from "../services/notificationsApi";

export function useQuestionEvaluation({ currentWeek }) {
  const {
    data,
    isPending: isSearching,
    error,
  } = useQuery({
    queryKey: ["questionEvaluation"],
    queryFn: () => getQuestionEvaluation(currentWeek),
    enabled: !!currentWeek,
  });

  return {
    data: data?.data?.questions,
    isSearching,
    error,
  };
}
