import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMealQuantity as updateMealQuantityApi } from "../services/dietsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateMealQuantity() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: updateMealQuantity,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateMealQuantityApi,
    onSuccess: () => {
      toast.success("تم تعديل الوجبه بنجاح");
      queryClient.invalidateQueries(["userDietByDate"]);
      navigate("/diet");
    },
    onError: () => {
      toast.error("فضل في تعديل الوجبه");
    },
  });

  return {
    updateMealQuantity,
    isUpdating,
    error,
  };
}
