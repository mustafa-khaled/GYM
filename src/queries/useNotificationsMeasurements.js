import { useQuery } from "@tanstack/react-query";
import { getUserNotificationsMeasurements } from "../services/notificationsApi";
import { useSubscribeDuration } from "./useSubscribeDuration";

export function useNotificationsMeasurements() {
  const { data: userData } = useSubscribeDuration();

  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["notificationsMeasurements", userData?.current_week],
    queryFn: () => getUserNotificationsMeasurements(userData?.current_week),
  });

  return {
    isLoading,
    notificationsMeasurements: data?.data?.questions,
    error,
  };
}
