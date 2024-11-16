import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userQuestions } from "../services/userQuestionsApi";
import toast from "react-hot-toast";

export function useUserDailyQuestions() {
  const navigate = useNavigate();

  const {
    mutate: userDailyQuestions,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: userQuestions,
    onSuccess: () => {
      toast.success("تم ارسال الاجابات بنجاح");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("فشل في ارسال الاجابات");
    },
  });

  return { isLoading, userDailyQuestions, error };
}
