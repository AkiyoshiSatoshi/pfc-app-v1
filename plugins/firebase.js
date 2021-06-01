import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAtLfoySTXRtAjxwmjX88gNxFosWnWtjCc",
      authDomain: "pfc-app-d2347.firebaseapp.com",
      projectId: "pfc-app-d2347",
      storageBucket: "pfc-app-d2347.appspot.com",
      messagingSenderId: "1060290551316",
      appId: "1:1060290551316:web:6f47e5581548b2b338d101",
      measurementId: "G-YT4XCZN6J9"
    }
  )
}

export default firebase