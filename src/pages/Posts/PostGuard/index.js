import React from "react";
import { Navigate } from "react-router-dom";
import { Posts } from "../index";

export const PostGuard = () => {
  const authData = JSON.parse(localStorage.getItem("auth"));
  return authData?.authenticated ? <Posts /> : <Navigate to="/login" />;
};
