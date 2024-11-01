import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log("useLogin", user);
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error("فشل في تسجيل الدخول");
    },
  });

  return { login, isLoading };
}
