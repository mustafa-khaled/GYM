import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { answerQuestions } from "../services/userQuestionsApi";
import toast from "react-hot-toast";

export function useAnswerQuestions() {
  const navigate = useNavigate();

  const {
    mutate: sendAnswers,
    isPending: isLoading,
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

  return { isLoading, sendAnswers, error };
}
