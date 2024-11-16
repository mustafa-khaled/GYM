import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeExercise as completeExerciseApi } from "../services/exercises";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCompleteExercise() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: completeExercise,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: completeExerciseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userExercisesByMuscle"] });
      toast.success("لقد اتممرت التمرينه بنجاح");
      navigate("/");
    },
    onError: () => {
      toast.error("فشل في اتمام التمرينه");
    },
  });

  return {
    completeExercise,
    isLoading,
    error,
  };
}
