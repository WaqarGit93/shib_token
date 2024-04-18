import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constents";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPW, setShowPW] = useState(false);
  const [showConPW, setShowConPW] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const [inputData, setInputData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
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

  const inputHandler = (e) => {
    setInputData({...inputData, [e.target.name]:e.target.value});
    // validateInput(e);
  };

  // const onInputChange = e => {
  //   const { name, value } = e.target;
  //   setInput(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
    
  // }

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
          } else if (inputData.confirmPassword && value !== inputData.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = inputData.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (inputData.password && value !== inputData.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }


  const handleSubmit =  (e) => {
    e.preventDefault();  
  
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 20000);
  
      axios.postForm(`${BASE_URL}/signup/`, 
      { 
        full_name: inputData.fullName,
        username: inputData.username,
        email: inputData.email,
        phone_number: inputData.phone,
        password1: inputData.password,
        password2: inputData.confirmPassword
      })
      .then((res) => {
        
        if(res.data.status === true){
          Swal.fire({
            title: res.data.message,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ok'
          })
          setInputData({
              fullName: '',
              username: '',
              email: '',
              phone: '',
              password: '',
              confirmPassword: '',
          })
          navigate('/login');
          
        }else if(res.data.status === false) {
          Swal.fire({
            title: res.data.message,
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok'
          })
        }else {
          alert('No')
        }
        
        setShowLoader(false);
      })
      .catch((err) => {
        console.log("err",err)
        setShowLoader(false);
      })
      
    // console.log(inputdata)
    };

  return (
    <div className="w-full bg-[#000] py-[60px] sm:py-20  sm:h-full">
      {/* <div className="main-container flex items-center"> */}
        <div className="md:w-[50%] w-full h-full m-auto flex flex-col justify-center items-center">
          <div className="ra-login-header flex flex-col gap-2 justify-center items-center">
              {/* <img
                src={ShibaLogo}
                alt="logo-missing"
                className="h-[100px] w-[100px]"
              /> */}
            <h2 className="text-[24px] sm:text-[36px] text-[#fff] font-semibold poppins-family">
              Sign Up <span className="uppercase text-primary"> SIOE </span>
            </h2>
          </div>
          <div className="ra-login-form mt-[8%] w-full">
            <form className="lg:max-w-[80%] max-w-[90%] mx-auto">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="w-full sm:w-1/2 relative">
                    <label
                      htmlFor="fullName"
                      className="block text-[#fff] mb-2 text-sm font-medium poppins-family"
                    >
                      Full Name
                    </label>
                    <div className="flex gap-[20px]">
                      <input
                        type="text"
                        id="fullName"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                        placeholder="Your Name"
                        value={inputData?.fullName}
                        name="fullName"
                        onChange={inputHandler}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 relative">
                    <label
                        htmlFor="fullName"
                        className="block text-[#fff] mb-2 text-sm font-medium poppins-family"
                      >
                        User Name
                    </label>
                    <div className="flex gap-[20px]">
                      <input
                        type="text"
                        id="username"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                        placeholder="User Name"
                        value={inputData?.username}
                        name="username"
                        onChange={inputHandler}
                        required=""
                      />
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="w-full sm:w-1/2 relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[#fff] text-sm font-medium poppins-family"
                    >
                       Email Addtress
                    </label>
                    <div className="flex gap-[20px]">
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                        placeholder="Your Email"
                        value={inputData?.email}
                        name="email"
                        onChange={inputHandler}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 relative">
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-[#fff] text-sm font-medium poppins-family"
                      >
                        Phone Number
                      </label>
                      <div className="flex gap-[20px]">
                        <input
                          type="text"
                          id="phone"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5 "
                          placeholder="Your Phone Nnummber"
                          value={inputData?.phone}
                          name="phone"
                          onChange={inputHandler}
                          required=""
                        />
                      </div>
                  </div>
                </div>
               
              </div>
              <div className="mb-6 relative">
                <div className="flex flex-col sm:flex-row gap-[20px]">
                  <div className="w-full sm:w-1/2 relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-[#fff] text-sm font-medium dark:text-white poppins-family"
                    >
                       Password
                    </label>
                    <input
                      type={showPW ? "text" : "password"}
                      id="password"
                      placeholder="**********"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5"
                      value={inputData?.password}
                      name="password"
                      onChange={inputHandler}
                      required=""
                    />
                    <span
                      className="absolute right-4 top-[38px] z-[999] text-[#000] cursor-pointer"
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
                      Confirm Password
                    </label>
                    <input
                      type={ showConPW ? "text" : "password" }
                      id="confirm-password"
                      name="confirmPassword"
                      placeholder="**********"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#BA68C8] focus:border-[#BA68C8] block w-full p-2.5"
                      value={inputData?.confirmPassword}
                      onChange={inputHandler}
                      // value={input.confirmPassword}
                      // onChange={onInputChange}
                      // onBlur={validateInput}
                      required=""
                    />
                    <span className="absolute right-4 top-[38px] z-[999] text-[#000] cursor-pointer" onClick={() => HandlePassword('')}> 
                      {showConPW ? <EyeOutlined /> : <EyeInvisibleOutlined />} 
                    </span>
                    {/* <p> {error.confirmPassword && ( <span className="err">{error.confirmPassword}</span> )} </p> */}
                  </div>
                </div>
               
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
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
