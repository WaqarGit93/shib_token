import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']); 
  const [timer, setTimer] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendEnabled(true);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
  
    if (value === '' && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (index < otp.length - 1 && value !== '') {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  
  const navigate = useNavigate()

  const handleNavigation = () =>{
    navigate('/')
  }

  const handleResend = () => {
    setTimer(60);
    setIsResendEnabled(false);
  };
  return (
    <div className="otp-input-container m-auto w-[100%] flex flex-col justify-center gap-[20px] my-[15%]">
        <div className='text-center lg:text-[30px] text-[20px] block text-sm font-medium text-gray-900 mb-5 poppins-family'>
            Please enter the OTP
        </div>
        <div className="lg:gap-10 gap-5 flex justify-center">
       {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          className="otp-input border-2 border-[#ba68c8] lg:w-[5%] w-[44px] outline-none text-center lg:py-4 py-1 rounded-lg text-[25px] poppins-family"
        />
      ))}
      </div>
      <div className='text-center mt-5 poppins-family'>
        {timer > 0 ? (
          <span>Resend OTP in <strong className='text-[#ba68c8]'>{timer}s</strong></span>
        ) : (
          <button
            onClick={handleResend}
            disabled={!isResendEnabled}
            className="resend-button lg:font-[700] text-[15px] font-[600] poppins-family"
          >
            Resend OTP
          </button>
        )}
         <div className="flex justify-center items-center my-[30px]">
                <button
                  type="submit"
                  className="w-[150px] text-white bg-[#ba68c8] hover:bg-[#37474f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family"
                  onClick={handleNavigation}
                >
                  Confirm
                </button>
              </div>
      </div>
    </div>
  );
};

export default Otp;
