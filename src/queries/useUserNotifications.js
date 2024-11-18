import { useQuery } from "@tanstack/react-query";
import { getUserNotifications } from "../services/notificationsApi";

export function useUserNotifications() {
  const {
    isPending: isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["userNotifications"],
    queryFn: getUserNotifications,
  });

  return {
    isLoading,
    notifications: data?.data?.notifications,
    error,
  };
}
