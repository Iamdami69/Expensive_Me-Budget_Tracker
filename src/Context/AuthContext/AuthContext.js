//@ts-check
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../config/firebase/firebase';

const AuthContext = createContext({ user: null });

export const AuthContextSupplier = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const signup = async (
    /** @type {string} */ email,
    /** @type {string} */ password,
    /** @type {any} */ displayName
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: displayName
        });
      })
      .catch((error) => {
        setMessage(error.message);
        setMessageType('error');
      });
  };
  const signin = async (
    /** @type {string} */ email,
    /** @type {string} */ password
  ) => {
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setMessage(error.message);
      setMessageType('error');
    });
  };
  const signout = async () => {
    await signOut(auth);
    setUser(null);
  };
  const resetPassword = async (/** @type {string} */ email) => {
    await sendPasswordResetEmail(auth, email).catch((error) =>
      setMessage(error.message)
    );
  };
  const continueWithGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      setMessage(error.message);
      setMessageType('error');
    });
  };
  const continueWithGithub = async () => {
    await signInWithPopup(auth, new GithubAuthProvider()).catch((error) => {
      setMessage(error.message);
      setMessageType('error');
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      setUser(res);
      setAuthIsReady(true);
    });
    setMessage(null);
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authIsReady,
        messageType,
        message,
        setMessage,
        user,
        signup,
        signin,
        signout,
        resetPassword,
        setMessageType,
        continueWithGoogle,
        continueWithGithub
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
