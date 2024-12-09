import { useMutation } from "@tanstack/react-query";
import { copyMeal as copyMealApi } from "../services/dietsApi";
import toast from "react-hot-toast";

export function useCopyMeal() {
  const {
    mutate: copyMeal,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationFn: copyMealApi,
    onSuccess: () => {
      toast.success("تم نسخ الوجبات بنجاح");
    },
    onError: () => {
      toast.error("فشل في نسخ الوجبات");
    },
  });

  return {
    copyMeal,
    isAdding,
    error,
  };
}
