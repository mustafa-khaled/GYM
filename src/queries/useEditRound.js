import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editExistRound } from "../services/exercises";
import toast from "react-hot-toast";

export function useEditRound() {
  const queryClient = useQueryClient();

  const {
    mutate: editRound,
    isPending: isEditingRound,
    error,
  } = useMutation({
    mutationFn: editExistRound,
    onSuccess: () => {
      queryClient.invalidateQueries(["userExercisesByMuscle"]);
      toast.success("تم تعديل الجولة بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء تعديل الجولة");
    },
  });

  return {
    editRound,
    isEditingRound,
    error,
  };
}
