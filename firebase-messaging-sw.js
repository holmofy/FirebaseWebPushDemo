importScripts("https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLftlZ8sLg3GxF8KZHBF4YBDDeR1kcAbc",
    authDomain: "web-push-test-414c3.firebaseapp.com",
    databaseURL: "https://web-push-test-414c3.firebaseio.com",
    projectId: "web-push-test-414c3",
    storageBucket: "web-push-test-414c3.appspot.com",
    messagingSenderId: "707954007599",
    appId: "1:707954007599:web:2feaa8375c86cf6cd770da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("init ok");
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const { title, ...options } = payload;
    return self.registration.showNotification(title, options);
});