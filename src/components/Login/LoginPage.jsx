import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constents";
import axios from "axios";
import Swal from "sweetalert2";

const LoginPage = ({setTokenId, setUserId, setUserOwns, setSession}) => {
  // const data = { username : '' , password : ''};
  const [showPW, setShowPW] = useState(false);
  const HandlePassword = () => {
    setShowPW(!showPW)
  }

const navigate = useNavigate();
const [inputdata, setInputdata] = useState({ username : '' , password : ''});
const [showLoader, setShowLoader] = useState(false);

const inputHandler = (e) => {
  setInputdata({...inputdata, [e.target.name]:e.target.value})
};
const handleSubmit =  (e) => {
  e.preventDefault();  

  setShowLoader(true);
  setTimeout(() => setShowLoader(false), 20000);

    axios.postForm(`${BASE_URL}/userLogin/`, 
    { 
      username: inputdata.username,
      password: inputdata.password
    })
    .then((res) => {
      if(res?.data?.status === true){
        Swal.fire({
          title: res?.data?.message,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        })

        if(res?.data?.user_id) {
          localStorage.setItem("sioe_token_id", res?.data?.token_id)
          localStorage.setItem("sioe_user_id", res?.data?.user_id)
          localStorage.setItem("sioe_username", res?.data?.username)
          localStorage.setItem("sioe_email", res?.data?.email)

          setSession(true)

          UserDetails(res?.data?.user_id)
          setInputdata({ username: '', password: '' })
          navigate('/')
        }
        
      }else if(res?.data?.status === false) {
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
  };

  const UserDetails = (userId) => {
    axios.postForm(`${BASE_URL}/TokenDetail/`, 
    { user_id: userId })
    .then((res) => {
      console.log("res", res.data)
      setUserOwns({
        TotalAmount: res?.data?.total_amount,
        TotalTokens: res?.data?.total_token
      });
    })
    .catch((err) => {
      console.log("err",err)
    })

    axios.get(`${BASE_URL}/TokenDetail/?user_id=${userId}`)
    .then((res) => {
      console.log("res", res.data)
    })
    .catch((err) => {
      console.log("err",err)
    })
  }

  return (
   <div className="w-full bg-[#000] py-[60px] sm:py-0 sm:h-full">
     <div className="main-container flex items-center justify-center h-full gap-4">
      <div className="md:w-1/2 w-full h-full m-auto flex flex-col justify-center gap-14 items-center">
        <div className="ra-login-header flex flex-col gap-2 justify-center items-center">
            {/* <img
              src={ShibaLogo}
              alt="logo-missing"
              className="h-[100px] w-[100px]"
            /> */}
          <h2 className="text-[24px] sm:text-[36px] text-[#fff] font-semibold poppins-family">
            Login <span className="uppercase text-primary"> sioe </span>
          </h2>
        </div>
        <div className="ra-login-form w-full">
          <form className="max-w-[90%] mx-auto">
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-white poppins-family"
              >
                Enter Your email
              </label>
              <input
                type="text"
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Enter Username"
                value={inputdata?.username}
                name="username"
                onChange={inputHandler}
                required=""
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="login-password"
                className="block mb-2 text-sm font-medium text-white poppins-family"
              >
                Enter Your password
              </label>
              <input
                type={ showPW ? "text" : "password" }
                id="login-password"
                placeholder="**********"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                name="password"
                value={inputdata?.password}
                onChange={inputHandler}
                required=""
              />
              <span className="absolute right-4 top-[38px] z-[999] cursor-pointer" onClick={() => HandlePassword('first')}> 
                {showPW ? <EyeOutlined style={{color: '#000'}} /> : <EyeInvisibleOutlined style={{color: '#000'}} />} 
              </span>
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                onClick={handleSubmit}
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
