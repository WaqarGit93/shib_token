import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ShibaLogo from "../../assets/svg/shib-logo.svg";
const SignUpPage = () => {
  const [formRender, setFormRender] = useState(true);
  const [showPW, setShowPW] = useState(false);
  const [showConPW, setShowConPW] = useState(false);

  const handleFormRender = () => {
    setFormRender(!formRender);
  };

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
      {/* <div className="main-container flex items-center"> */}
        <div className="md:w-[50%] w-full h-full m-auto flex flex-col justify-center items-center">
          <div className="ra-login-header flex flex-col gap-2 justify-center items-center">
              <img
                src={ShibaLogo}
                alt="logo-missing"
                className="h-[100px] w-[100px]"
              />
            <h2 className="text-[24px] sm:text-[36px] text-[#fff] font-semibold poppins-family">
              Sign Up for <span className="uppercase text-primary"> SHIBTOKEN </span>
            </h2>
          </div>
          <div className="ra-login-form mt-[8%] w-full">
            <form className="lg:max-w-[80%] max-w-[90%] mx-auto">
              <div className="mb-6">
                <label
                  htmlFor="your-name"
                  className="block text-[#fff] mb-2 text-sm font-medium poppins-family"
                >
                  Enter Your Name
                </label>
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <input
                    type="text"
                    id="your-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                    placeholder="First Name"
                    required=""
                  />
                  <input
                    type="text"
                    id="your-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#fff] text-sm font-medium poppins-family"
                >
                  Enter Your Email
                </label>
                <div className="flex gap-[20px]">
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                    placeholder="Enter Email"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-6 relative">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="w-full sm:w-1/2 relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-[#fff] text-sm font-medium dark:text-white poppins-family"
                    >
                      Enter Your Password
                    </label>
                    <input
                      type={showPW ? "text" : "password"}
                      id="password"
                      placeholder="**********"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5"
                      required=""
                    />
                    <span
                      className="absolute right-4 top-[11px] z-[999] cursor-pointer"
                      onClick={() => HandlePassword("first")}
                    >
                      {showPW ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </span>
                  </div>
                  <div className="w-full sm:w-1/2 relative">
                  <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-[#fff] text-sm font-medium dark:text-white poppins-family"
                    >
                      Enter Confirm Password
                    </label>
                    <input
                      type={ showConPW ? "text" : "password" }
                      id="confirm-password"
                      name="conform-password"
                      placeholder="**********"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5"
                      // value={input.confirmPassword}
                      // onChange={onInputChange}
                      // onBlur={validateInput}
                      required=""
                    />
                    <span className="absolute right-4 top-[11px] z-[999] cursor-pointer" onClick={() => HandlePassword('')}> 
                      {showConPW ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
                    </span>
                    {/* <p> {error.confirmPassword && ( <span className="err">{error.confirmPassword}</span> )} </p> */}
                  </div>
                </div>
               
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                >
                  SignUp
                </button>
              </div>
              <div className="flex justify-center items-start mt-4">
                <p
                  htmlFor="terms"
                  className="ms-2 text-[12px] font-medium text-white poppins-family"
                >
                  Already have an Account&nbsp;
                  <Link to="/">
                    <strong className="hover:text-[#8bc53f] transition-all duration-500"> Sign in </strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default SignUpPage;
