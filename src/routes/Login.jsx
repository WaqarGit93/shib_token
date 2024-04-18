import React from "react";
import "../components/Login/Login.css";
import LoginPage from "../components/Login/LoginPage";

const Login = ({setUserOwns, setSession}) => {
  return (
    <div className="flex justify-center items-center h-full lg:h-[100vh]">
      <LoginPage 
        setUserOwns={setUserOwns}
        setSession={setSession}
       />
    </div>
  );
};

export default Login;
