import { useQuery } from "@tanstack/react-query";
import { searchForMeal as searchForMealApi } from "../services/dietsApi";
import { useSearchParams } from "react-router-dom";

export function useSearchForMeal() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  const {
    data,
    isPending: isSearching,
    error,
  } = useQuery({
    queryKey: ["searchForMeal", search],
    queryFn: () => searchForMealApi({ word: search }),
  });

  return {
    searchData: data?.data?.foods,
    isSearching,
    error,
  };
}
