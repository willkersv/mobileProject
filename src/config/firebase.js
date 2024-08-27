import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  increment,
} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';;

const firebaseConfig = {
  apiKey: "AIzaSyA6tALOHgP18WRLAUS45NhH8DSog0Tl9dM",
  authDomain: "satisfying-you-c46e6.firebaseapp.com",
  projectId: "satisfying-you-c46e6",
  storageBucket: "satisfying-you-c46e6.appspot.com",
  messagingSenderId: "1038049368298",
  appId: "1:1038049368298:web:c82580210793c5fc755f93"
};

const app = initializeApp(firebaseConfig);

const auth_mod = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);
const storage = getStorage(app);

export { auth_mod, app, db, storage }
