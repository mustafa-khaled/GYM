import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addMeasurement as addMeasurementApi } from "../services/userQuestionsApi";
import toast from "react-hot-toast";

export function useAddMeasurement() {
  const navigate = useNavigate();

  const {
    mutate: addMeasurement,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationFn: addMeasurementApi,
    onSuccess: () => {
      toast.success("تم ارسال الاجابات بنجاح");
      navigate("/");
    },
    onError: () => {
      toast.error("فشل في ارسال الاجابات");
    },
  });

  return {
    addMeasurement,
    isAdding,
    error,
  };
}
