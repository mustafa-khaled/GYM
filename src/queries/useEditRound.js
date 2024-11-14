import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editExistRound } from "../services/exercises";

export function useEditRound() {
  const queryClient = useQueryClient();

  const {
    mutate: editRound,
    isPending: isEditingRound,
    error,
  } = useMutation({
    mutationFn: editExistRound,
    // onSuccess: async () => {
    //   await queryClient.invalidateQueries(["booksForCertainCourse"]);
    // },
  });

  return {
    editRound,
    isEditingRound,
    error,
  };
}
