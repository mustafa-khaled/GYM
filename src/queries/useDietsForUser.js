import { useQuery } from "@tanstack/react-query";
import { getDietsForUser } from "../services/dietsApi";

export function useDietsForUser() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["dietsForUser"],
    queryFn: getDietsForUser,
  });

  return {
    isLoading,
    userDiet: data?.data?.user_diet,
    error,
  };
}
