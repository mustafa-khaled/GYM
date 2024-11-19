import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addContact as addContactApi } from "../services/contactUs";

export function useAddContact() {
  const navigate = useNavigate();

  const {
    mutate: addContact,
    isPending: isAddingContact,
    error,
  } = useMutation({
    mutationFn: addContactApi,
    onSuccess: () => {
      toast.success("تم الارسال بنجاح");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("حدث خطأ أثناء الارسال");
    },
  });

  return {
    addContact,
    isAddingContact,
    error,
  };
}
