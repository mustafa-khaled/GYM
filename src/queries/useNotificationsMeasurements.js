import { useQuery } from "@tanstack/react-query";
import { getUserNotificationsMeasurements } from "../services/notificationsApi";

export function useNotificationsMeasurements() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["notificationsMeasurements"],
    queryFn: getUserNotificationsMeasurements,
  });

  return {
    isLoading,
    notificationsMeasurements: data?.data?.questions,
    error,
  };
}
