import { useQuery } from "@tanstack/react-query";
import { userWeeklyQuestions } from "../services/userQuestionsApi";
import { useSubscribeDuration } from "./useSubscribeDuration";

export function useUserWeeklyQuestions() {
  const { data: userData } = useSubscribeDuration();

  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userWeeklyQuestions", userData?.current_week],
    queryFn: () => userWeeklyQuestions(userData?.current_week),
  });

  return {
    isLoading,
    weeklyQuestions: data?.data?.questions,
    error,
  };
}
