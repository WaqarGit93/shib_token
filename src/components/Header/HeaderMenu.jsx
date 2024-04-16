import { Link } from "react-router-dom";
import PandaLogo from "../../assets/svg/panda-svg.svg";
import Magazin from "../../assets/img/shiba-edition.png";
import { CloseOutlined } from '@ant-design/icons';
import './Header.css';
const HeaderMenu = ({ closeMenu, menuOpen }) => {
  // const activeStyle = "text-[#C61E46] font-montserat text-[14px] font-medium";
  // const nonActiveStyle = "font-[500] text-[#fff] font-montserat text-[14px] font-medium";

  return (
    <>
      <div className={`w-full bg-[#000] h-[100vh] bg-overlay-main overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-[999]`}>
        <div className="w-full max-w-[1024px] bg-overlay mx-auto flex justify-center items-center px-4 sm:px-0 py-[40px] sm:py-[80px] relative">
          <div className="absolute top-[50px] sm:top-[100px] right-5 sm:right-0 cursor-pointer" onClick={closeMenu}> 
            <CloseOutlined className="text-[#fff] text-[28px] sm:text-[36px]" /> 
          </div>
          <div className="w-full sm:w-[70%]">
            <div className="logo w-full h-full z-10">
                <Link to='/'>
                    <img src={PandaLogo} alt="logo" className="w-[40px] sm:w-[80px] h-full" />
                </Link>
            </div>
            <div className="py-6 text-[#fff]"> ||||||||||||||||||||| </div>
            <div className="menu ">
              <div
                className="flex flex-col items-start md:gap-4 w-full gap-[14px] z-[100] max-h-[400px] overflow-y-auto"
              >
                <Link to="/"  className="flex text-[#fff] hover:text-[#ff7a1d] bg-fixed transition duration-300 ease-in-out rounded-lg">
                    <span className='font-helvatica-bold text-[26px] sm:text-[42px]' onClick={closeMenu}>
                        Home
                    </span>
                </Link>
                <Link to="/login"  className="flex text-[#fff] hover:text-[#ff7a1d] bg-fixed transition duration-300 ease-in-out rounded-lg">
                    <span className='font-helvatica-bold text-[26px] sm:text-[42px]' onClick={closeMenu}>
                        Login
                    </span>
                </Link>
                <Link to="/signup"  className="flex text-[#fff] hover:text-[#ff7a1d] bg-fixed transition duration-300 ease-in-out rounded-lg">
                    <span className='font-helvatica-bold text-[26px] sm:text-[42px]' onClick={closeMenu}>
                        SignUp
                    </span>
                </Link>
                <a href="#"  className="flex text-[#fff] hover:text-[#ff7a1d] bg-fixed transition duration-300 ease-in-out rounded-lg">
                    <span className='font-helvatica-bold text-[26px] sm:text-[42px]' onClick={closeMenu}>
                        Blog
                    </span>
                </a>
                <a href="#"  className="flex text-[#fff] hover:text-[#ff7a1d] bg-fixed transition duration-300 ease-in-out rounded-lg">
                    <span className='font-helvatica-bold text-[26px] sm:text-[42px]' onClick={closeMenu}>
                        Contact Us
                    </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[30%] hidden sm:block">
            <div className="flex- flex-col gap-2 pt-10"> 
              {/* <h2> Latest Magazin </h2> */}
              <a href="#"> 
                <img src={Magazin} alt="missing" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
