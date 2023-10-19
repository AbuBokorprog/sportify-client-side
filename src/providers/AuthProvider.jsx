import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const token = localStorage.getItem("token");
      if (!currentUser || !token) return;
      axios
        .get(`/user/${currentUser?.email}`)
        .then(({ data }) => {
          const fendedUser = { ...currentUser, ...data };
          setUser(fendedUser);
          setLoading(false);
        })
        .catch((err) => {
          console.log("AuthProvider: ", err);
          logout()
            .then()
            .catch((err) => console.log("logout err: ", err));
          setUser(null);
        });
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
