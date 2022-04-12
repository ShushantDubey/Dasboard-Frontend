import { initializeApp } from "firebase/app";
import {
  // GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFJpIjAQVoNn3vmKZAOVU9g7mh06FYwE8",
  authDomain: "infivr.firebaseapp.com",
  projectId: "infivr",
  storageBucket: "infivr.appspot.com",
  messagingSenderId: "376037702436",
  appId: "1:376037702436:web:41d53a08a89891bbef51b1",
  measurementId: "G-290J74EJ00",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const userAuth = await signInWithEmailAndPassword(auth, email, password);
    console.log(userAuth);
  } catch (err) {
    console.log(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
