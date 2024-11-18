try {
  importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js");
  importScripts(
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js",
  );

  const firebaseConfig = {
    apiKey: "AIzaSyCABnsQPJFSX4PDzk98KFQgqQXxqV4V4DU",
    authDomain: "gym-system-d9590.firebaseapp.com",
    projectId: "gym-system-d9590",
    storageBucket: "gym-system-d9590.firebasestorage.app",
    messagingSenderId: "1052775039502",
    appId: "1:1052775039502:web:26847653f070518761725f",
    measurementId: "G-V55D4MY6KY",
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);
  });
} catch (error) {
  console.error("Service Worker error:", error);
}
