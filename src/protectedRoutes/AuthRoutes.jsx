import React, { useContext } from "react";
import { AuthContext } from "../context/Contexts";
import { Navigate } from "react-router";
import LoadingState from "../pages/LoadingState/LoadingState";

const AuthRoutes = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  if (authLoading) return <LoadingState text="You are already logged in" />;
  if (!authLoading && user) return <Navigate to={"/"} />;
  return children;
};

export default AuthRoutes;
