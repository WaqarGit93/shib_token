import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import ShibaLogo from "../../assets/svg/shib-logo.svg";
import { Link } from "react-router-dom";

const ForgotPassPage = () => {
  const [showPW, setShowPW] = useState(false);
  const [showConPW, setShowConPW] = useState(false);

  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const HandlePassword = (type) => {
    if(type === 'first') {
      setShowPW(!showPW)
    } else {
      setShowConPW(!showConPW)
    }  
  }

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }

  return (
    <div className="w-full bg-[#000] py-[60px] sm:py-0 sm:h-[100vh]">
      <div className="main-container flex items-center justify-center h-full gap-4 mx-auto">
        {/* <div className="w-1/2 hidden md:block ra-login-left-bg">
          <div className="w-full h-full">
            <ResetSvg />
          </div>
        </div> */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 py-2">
          <div className="ra-login-header flex flex-col gap-2 justify-center items-center">
            <img
              src={ShibaLogo}
              alt="logo-missing"
              className="h-[100px] w-[100px]"
            />
          <h2 className="text-[24px] sm:text-[36px] text-[#fff] font-semibold poppins-family">
            Reset Password
          </h2>
          </div>
          <div className="ra-login-form pt-8">
            <form className="max-w-[80%] mx-auto">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white poppins-family"
                >
                  Enter Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  value={input.email}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  required=""
                />
                <p> {error.email && <span className="err">{error.email}</span>}</p>
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white poppins-family"
                >
                  Enter New password
                </label>
                <input
                  type={ showPW ? "text" : "password" }
                  id="password"
                  name='password'
                  placeholder="**********"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  value={input.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  required=""
                />
                <span className="absolute right-4 top-[38px] z-[999] cursor-pointer" onClick={() => HandlePassword('first')}> 
                  {showPW ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
                </span>
                <p> {error.password && <span className="err">{error.password}</span>} </p>
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-white poppins-family"
                >
                  Enter Confirm Password
                </label>
                <input
                  type={ showPW ? "text" : "password" }
                  id="repeat-password"
                  name="conform-password"
                  placeholder="**********"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  value={input.confirmPassword}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  required=""
                />
                <span className="absolute right-4 top-[38px] z-[999] cursor-pointer" onClick={() => HandlePassword('')}> 
                  {showConPW ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
                </span>
                <p> {error.confirmPassword && ( <span className="err">{error.confirmPassword}</span> )} </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-[150px]  text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center items-start mt-2">
                <p className="btm-btns ms-2 text-[12px] text-center font-medium text-white">
                  Create an Account?
                  <Link to="/signup">
                    <strong className="hover:text-[#8bc53f] transition-all duration-500"> Sign Up </strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default ForgotPassPage;
