import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
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
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
       localStorage.setItem("token", user.accessToken);
       console.log(user.accessToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   
  } catch (err) {
    console.log(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
