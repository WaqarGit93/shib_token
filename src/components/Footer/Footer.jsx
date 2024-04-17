import { FacebookFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#253437]">
      <div className="footer-wrap py-[50px] sm:py-[60px] px-4 sm:px-2 lg:px-0 w-full max-w-[1200px] flex flex-col gap-8 md:flex-row mx-auto">
        <div className="footer-info-sec w-full md:w-[30%] lg:w-[24%] lg:pb-0 pb-2 sm:pb-[50px] text-[#fff] flex flex-col gap-6">
            <h3 className='max-w-full sm:max-w-[70%] poppins-semibold'>
              SIOE
            </h3>
          {/* <div className="footer-location flex justify-start gap-[10px]">
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <InstagramFilled className='text-[20px]' />
            </a>
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <TwitterOutlined className='text-[20px]' />
            </a>
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <FacebookFilled className='text-[20px]' />
            </a>
          </div> */}
          
        </div>
        <div className="location-sec w-full md:w-[28%] flex flex-col gap-[15px] text-[#fff]">
          <div className="footer-location w-[85%] flex flex-col">
            <h3 className="text-[#fff] poppins-medium mb-3"> Products </h3>
            <div className="text-[16px] text-[#fff] poppins-regular cursor-pointer flex flex-col gap-2">
              <a className="w-max"> Lorem Ipsum </a>
              <a className="w-max"> Lorem Ipsum </a>
              <a className="w-max"> Lorem Ipsum </a>
              <a className="w-max"> Lorem Ipsum </a>
            </div>
          </div>
        </div>
        <div className="location-sec w-full md:w-[28%] flex flex-col gap-[15px] text-[#fff]">
          <div className="footer-location w-[85%] flex flex-col">
            <h3 className="text-[#fff] poppins-medium mb-3"> Account </h3>
            <div className="text-[16px] text-[#fff] poppins-regular cursor-pointer flex flex-col gap-2">
              <Link to='/signup' className="w-max"> Sign Up </Link>
              <Link to='/login' className="w-max"> Sign In </Link>
              <a className="w-max"> Recover </a>
            </div>
          </div>
        </div>
        <div className="location-sec w-full md:w-[20%] flex flex-col text-[#fff] text-left">
          <h3 className="text-[#fff] poppins-medium mb-3"> Company </h3>
          <div className="text-[16px] text-[#fff] poppins-regular cursor-pointer flex flex-col gap-2">
              <a className="w-max"> Terms & Conditions </a>
              <a className="w-max"> FAQ's </a>
              <a className="w-max"> Shib Login </a>
              <a className="w-max"> Privacy Policy </a>
            </div>

        </div>
      </div>
      <div className="py-[25px] px-4 sm:px-2 lg:px-0 w-full max-w-[1200px] flex flex-col gap-2 mx-auto">
        <div className='border-[0.5px] border-[#364347]'></div>
        <div className='flex justify-between w-full'>
          <div className="footer-info-sec w-full md:w-[50%] lg:w-[50%] text-[#fff] flex flex-col gap-6">
            <p className='text-[12px] text-[#737a85] italic'> Copyright © 2024 SIOE</p>
          </div>
          <div className="location-sec w-full md:w-[25%] flex flex-col gap-[5px] sm:gap-[15px] text-[#fff]">
            <div className="footer-location w-[85%] flex flex-col">
              <div className="footer-location flex justify-end gap-[20px]">
                <a href='#' className="text-[#4e5e63] hover:text-[#fff] bg-transparent flex justify-center items-center">
                  <InstagramFilled className='text-[20px]' />
                </a>
                <a href='#' className="text-[#4e5e63] hover:text-[#fff] bg-transparent flex justify-center items-center">
                  <TwitterOutlined className='text-[20px]' />
                </a>
                <a href='#' className="text-[#4e5e63] hover:text-[#fff] bg-transparent flex justify-center items-center">
                  <FacebookFilled className='text-[20px]' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

