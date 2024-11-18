import { messaging } from "../../../firebase.config";
import { getToken, onMessage } from "firebase/messaging";
import { storeToken } from "../../services/apiAuth";

const NotificationHandler = () => {
  const VAPID_ID = import.meta.env.VITE_FIREBASE_VAPID_ID;
  // Request permission for notifications
  const requestPermission = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey: VAPID_ID,
      });
      if (token) {
        storeToken(token);
        console.log("FCM Token:", token);
      } else {
        console.warn("No registration token available.");
      }
    } catch (error) {
      console.error("An error occurred while retrieving token:", error);
    }
  };

  // Listen for foreground messages
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Customize how you handle foreground notifications
  });

  return <div onClick={requestPermission}>dddd</div>;
};

export default NotificationHandler;