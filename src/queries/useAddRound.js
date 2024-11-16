import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRound as addRoundApi } from "../services/exercises";
import toast from "react-hot-toast";

export function useAddRound() {
  const queryClient = useQueryClient();

  const {
    mutate: addRound,
    isPending: isAddingRound,
    error,
  } = useMutation({
    mutationFn: addRoundApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userExercisesByMuscle"] });
      toast.success("تم إضافة الجولة بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إضافة الجولة");
    },
  });

  return {
    addRound,
    isAddingRound,
    error,
  };
}
