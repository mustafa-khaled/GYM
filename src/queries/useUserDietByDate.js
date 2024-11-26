import { useQuery } from "@tanstack/react-query";
import { getUserDietByDate } from "../services/dietsApi";

export function useUserDietByDate(date) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["userDietByDate", date],
    queryFn: () => getUserDietByDate(date),
    enabled: !!date,
  });

  return {
    isLoading,
    userDietByDate: data?.data?.user_diet,
    error,
  };
}
