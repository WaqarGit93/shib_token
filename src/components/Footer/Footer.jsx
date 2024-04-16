import { FacebookFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#060912]">
      <div className="footer-wrap py-[50px] sm:py-[80px] px-4 sm:px-2 lg:px-0 w-full max-w-[1200px] flex flex-col gap-8 md:flex-row mx-auto">
        <div className="footer-info-sec w-full md:w-[40%] lg:w-[40%] lg:pb-0 pb-2 sm:pb-[50px] text-[#fff] flex flex-col gap-6">
            <h3 className='max-w-full sm:max-w-[70%] poppins-semibold'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </h3>
          <div className="footer-location flex justify-start gap-[10px]">
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <InstagramFilled className='text-[20px]' />
            </a>
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <TwitterOutlined className='text-[20px]' />
            </a>
            <a href='#' className="w-[50px] h-[50px] rounded-[50%] text-[#fff] hover:text-[#000] bg-transparent hover:bg-[#fff] border border-[#FFFFFF2E] flex justify-center items-center">
              <FacebookFilled className='text-[20px]' />
            </a>
          </div>
          <p className='text-[12px] text-gray-400 italic'> Copyright © 2024 ShibaDev</p>
        </div>
        <div className="location-sec w-full md:w-[35%] flex flex-col gap-[15px] text-[#fff]">
          <div className="footer-location w-[85%] flex flex-col">
            <h3 className="text-[#fff] poppins-medium mb-3"> Products </h3>
            <div className="text-[16px] text-[#fff] poppins-regular cursor-pointer flex flex-col gap-2">
              <a className="w-max"> Shibarium </a>
              <a className="w-max"> ShibaSwap </a>
              <a className="w-max"> Shib The Metaverse </a>
              <a className="w-max"> Shibacals </a>
              <a className="w-max"> Shibarium </a>
              <a className="w-max"> Shiba Eternity </a>
            </div>
          </div>
        </div>
        <div className="location-sec w-full md:w-[25%] flex flex-col text-[#fff] text-left">
          <h3 className="text-[#fff] poppins-medium mb-3"> Quick Links </h3>
          <div className="text-[16px] text-[#fff] poppins-regular cursor-pointer flex flex-col gap-2">
              <a className="w-max"> Contact Us </a>
              <a className="w-max"> Latest Blogs </a>
              <a className="w-max"> Shib Login </a>
              <a className="w-max"> Foundational Document </a>
              <a className="w-max"> Certik ShibaSwap Audit </a>
              <a className="w-max"> Shiba Eternity Fandom </a>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

