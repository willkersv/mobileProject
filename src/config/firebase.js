import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6tALOHgP18WRLAUS45NhH8DSog0Tl9dM",
  authDomain: "satisfying-you-c46e6.firebaseapp.com",
  projectId: "satisfying-you-c46e6",
  storageBucket: "satisfying-you-c46e6.appspot.com",
  messagingSenderId: "1038049368298",
  appId: "1:1038049368298:web:c82580210793c5fc755f93"
};

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export { auth_mod }
