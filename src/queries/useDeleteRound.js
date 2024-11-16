import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCertainRound } from "../services/exercises";
import toast from "react-hot-toast";

export function useDeleteRound() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteRound } = useMutation({
    mutationFn: deleteCertainRound,
    onSuccess: () => {
      toast.success("تم حذف الجولة بنجاح");
      queryClient.invalidateQueries(["userExercises"]);
    },
    onError: () => {
      toast.error("خطأ اثناء حذف الجولة");
    },
  });

  return { deleteRound, isDeleting };
}
