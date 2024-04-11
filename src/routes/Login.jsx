import React from "react";
import "../components/Login/Login.css";
import LoginPage from "../components/Login/LoginPage";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full lg:h-[100vh]">
      <LoginPage />
    </div>
  );
};

export default Login;
