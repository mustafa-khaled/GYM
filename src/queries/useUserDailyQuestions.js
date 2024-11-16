import { useQuery } from "@tanstack/react-query";
import { userQuestions } from "../services/userQuestionsApi";

export default function useUserDailyQuestions(date) {
  const isEnabled = !!date;
  const {
    data,
    isPending: isQuestionsLoading,
    error,
  } = useQuery({
    queryKey: ["dailyQuestions", date],
    queryFn: () => userQuestions({ date }),
    enabled: isEnabled,
  });
  return {
    userDailyQuestions: data?.data?.questions,
    isQuestionsLoading: isEnabled ? isQuestionsLoading : false,
    error,
  };
}
