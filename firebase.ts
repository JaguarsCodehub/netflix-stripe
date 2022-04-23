import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEe4lypLKMYx_Ueva4ty5vttfYn5Xtk-0',
  authDomain: 'netflix-stripe-d5f04.firebaseapp.com',
  projectId: 'netflix-stripe-d5f04',
  storageBucket: 'netflix-stripe-d5f04.appspot.com',
  messagingSenderId: '697383617135',
  appId: '1:697383617135:web:a94d5c805ed8f5ecca839a',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
