import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { answerQuestions } from "../services/userQuestionsApi";
import toast from "react-hot-toast";

export function useAnswerDailyQuestions() {
  const navigate = useNavigate();

  const {
    mutate: sendDailyAnswers,
    isPending: isSendingDailyAnswersLoading,
    error,
  } = useMutation({
    mutationFn: answerQuestions,
    onSuccess: () => {
      toast.success("تم ارسال الاجابات بنجاح");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("فشل في ارسال الاجابات");
    },
  });

  return { isSendingDailyAnswersLoading, sendDailyAnswers, error };
}
