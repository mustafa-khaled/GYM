import { useMutation, useQueryClient } from "@tanstack/react-query";
import { subscribeToPackage as subscribeToPackageApi } from "../services/apiPackage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSubscribeToPackage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: subscribeToPackage,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: subscribeToPackageApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["global"] });
      toast.success("تم ارسال طلبك بنجاح");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("فشل في ارسال الطلب حاول مره اخري");
    },
  });

  return { isLoading, subscribeToPackage, error };
}
