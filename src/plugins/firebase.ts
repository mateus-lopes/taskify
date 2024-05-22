import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKfywVpzJBXK92ZqHJBsoPBAfJF6EpAmw",
  authDomain: "taskify-312ed.firebaseapp.com",
  projectId: "taskify-312ed",
  storageBucket: "taskify-312ed.appspot.com",
  messagingSenderId: "742937493069",
  appId: "1:742937493069:web:46eac1a3ef096af962e604",
  measurementId: "G-VN33JYHSLN"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);