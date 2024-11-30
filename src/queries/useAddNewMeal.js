import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewMeal as addNewMealApi } from "../services/dietsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAddNewMeal() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: addNewMeal,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: addNewMealApi,
    onSuccess: () => {
      toast.success("تم اضافه الوجبه بنجاح");
      queryClient.invalidateQueries(["userDietByDate"]);
      navigate("/diet");
    },
    onError: () => {
      toast.error("فضل في اضافه الوجبه");
    },
  });

  return {
    addNewMeal,
    isLoading,
    error,
  };
}
