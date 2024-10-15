import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSingUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (user) => {
      navigate("/login", { replace: true });
      toast.success("تم انشاء حساب جديد بنجاح");
    },

    onError: (error) => {
      toast.error("فشل في انشاء حساب جديد");
    },
  });

  return { signUp, isLoading };
}
