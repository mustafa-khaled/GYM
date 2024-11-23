import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { answerWeekEvaluation } from "../services/userQuestionsApi";
import toast from "react-hot-toast";

export function useAnswerWeekEvaluation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: sendWeekEvaluation,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: answerWeekEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userWeeklyQuestions"] });
      toast.success("تم ارسال التطور الاسبوعي بنجاح");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("فشل في ارسال التطور الاسبوعي");
    },
  });

  return { isLoading, sendWeekEvaluation, error };
}
