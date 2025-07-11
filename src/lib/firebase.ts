// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyDOtJBt1Yz-y32HWF4mu7Q9-06EsDOPjmw",
  authDomain: "tunilinkv2-6cfb9.firebaseapp.com",
  projectId: "tunilinkv2-6cfb9",
  storageBucket: "tunilinkv2-6cfb9.appspot.com", // ✅ مصححة
  messagingSenderId: "391377337794",
  appId: "1:391377337794:web:693276132a50eb62a36a5b"
}

// تأكد من عدم تكرار التهيئة
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// ربط Firestore و Auth
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
