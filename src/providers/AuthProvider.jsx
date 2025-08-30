import { useEffect, useState } from "react";
import auth from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../context/Contexts";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setAuthLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const registerUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUSerWithEmail = ({ email, password }) => {
    return signInWithEmailAndPassword (auth, email, password);
  };

  const userAuth = {
    authLoading,
    setUser,
    user,
    registerUserWithEmail,
    loginUSerWithEmail
  };

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
