import { messaging } from "../../../firebase.config";
import { getToken, onMessage } from "firebase/messaging";
import { storeToken } from "../../services/apiAuth";
import { useState } from "react";

const NotificationHandler = () => {
  const VAPID_ID = import.meta.env.VITE_FIREBASE_VAPID_ID;
  const token = localStorage.getItem("GYM_USER_TOKEN");
  const [showModal, setShowModal] = useState(false);

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

  return <div />;
};

export default NotificationHandler;
