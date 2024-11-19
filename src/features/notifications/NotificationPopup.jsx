import { messaging } from "../../../firebase.config";
import { getToken } from "firebase/messaging";
import { storeToken } from "../../services/apiAuth";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";

const NotificationHandler = () => {
  const VAPID_ID = import.meta.env.VITE_FIREBASE_VAPID_ID;
  const token = localStorage.getItem("GYM_USER_TOKEN");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (token) {
      setShowModal(true);
    }
  }, [token]);

  const handleYes = async () => {
    try {
      const fcmToken = await getToken(messaging, {
        vapidKey: VAPID_ID,
      });
      if (fcmToken) {
        storeToken(fcmToken);
      } else {
        console.warn("No registration token available.");
      }
    } catch (error) {
      console.error("An error occurred while retrieving token:", error);
    }
    setShowModal(false); // Close modal
  };

  const handleNo = () => {
    setShowModal(false); // Close modal without requesting token
  };

  return (
    <>
      {showModal && (
        <Modal
          title="السماح بالاشعارات"
          message="هل ترغب في تفعيل الإشعارات للتحديثات؟"
          onYes={handleYes}
          onNo={handleNo}
        />
      )}
    </>
  );
};

const Modal = ({ title, message, onYes, onNo }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 rounded-lg bg-white p-6 shadow-lg sm:w-1/2">
        <div className="flex flex-col p-[20px]">
          <h2 className="mb-4 text-xl font-semibold">{title}</h2>
          <p className="mb-[1.2rem]">{message}</p>

          <div className="flex justify-end gap-[1.2rem]">
            <Button AriaLabel="acceptConfirm" onClick={onYes}>
              نعم
            </Button>
            <Button variant="secondary" onClick={onNo}>
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationHandler;
