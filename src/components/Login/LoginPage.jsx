import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import ShibaLogo from "../../assets/svg/panda-svg.svg";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [showPW, setShowPW] = useState(false);
  const HandlePassword = () => {
    setShowPW(!showPW)
  }

  const navigate = useNavigate()

  const handleNavigation = () =>{
    navigate('/otp')
  }
  return (
   <div className="w-full bg-[#000] py-[60px] sm:py-0 sm:h-full">
     <div className="main-container flex items-center justify-center h-full gap-4">
      {/* <div className="w-1/2 hidden md:block ra-login-left-bg">
        <div className="w-full h-full">
          <SvgJSX />
        </div>
      </div> */}
      <div className="md:w-1/2 w-full h-full m-auto flex flex-col justify-center gap-8 items-center">
        <div className="ra-login-header flex flex-col gap-2 justify-center items-center">
            <img
              src={ShibaLogo}
              alt="logo-missing"
              className="h-[100px] w-[100px]"
            />
          <h2 className="text-[24px] sm:text-[36px] text-[#fff] font-semibold poppins-family">
            Login <span className="uppercase text-primary"> SHIB Dev </span>
          </h2>
        </div>
        <div className="ra-login-form w-full">
          <form className="max-w-[90%] mx-auto">
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
                required=""
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-white poppins-family"
              >
                Enter Your password
              </label>
              <input
                type={ showPW ? "text" : "password" }
                id="repeat-password"
                placeholder="**********"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                required=""
              />
              <span className="absolute right-4 top-[38px] z-[999] cursor-pointer" onClick={() => HandlePassword('first')}> 
                {showPW ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
              </span>
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                onClick={handleNavigation}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-start mt-2">
              <p className="btm-btns ms-2 text-[12px] text-center font-medium text-[#fff]">
                Create an Account?
                <Link to="/signup">
                  <strong className="hover:text-[#8bc53f] transition-all duration-500"> Sign Up </strong>
                </Link>
                  | 
                <Link to="/reset">
                  <strong className="hover:text-[#8bc53f] transition-all duration-500"> Forgot Password </strong>
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

export default LoginPage;
