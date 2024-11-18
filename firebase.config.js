import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCABnsQPJFSX4PDzk98KFQgqQXxqV4V4DU",
  authDomain: "gym-system-d9590.firebaseapp.com",
  projectId: "gym-system-d9590",
  storageBucket: "gym-system-d9590.firebasestorage.app",
  messagingSenderId: "1052775039502",
  appId: "1:1052775039502:web:26847653f070518761725f",
  measurementId: "G-V55D4MY6KY",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
let analytics;
let messaging;

if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Firebase Analytics initialization error:", error);
  }

  try {
    messaging = getMessaging(app); // Messaging setup
  } catch (error) {
    console.error("Firebase Messaging initialization error:", error);
  }
}

export { app, analytics, messaging };
