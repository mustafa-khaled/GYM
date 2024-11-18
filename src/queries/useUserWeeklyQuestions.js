import { useQuery } from "@tanstack/react-query";
import { userWeeklyQuestions } from "../services/userQuestionsApi";

export function useUserWeeklyQuestions() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userWeeklyQuestions"],
    queryFn: userWeeklyQuestions,
  });

  return {
    isLoading,
    weeklyQuestions: data?.data?.questions,
    error,
  };
}
