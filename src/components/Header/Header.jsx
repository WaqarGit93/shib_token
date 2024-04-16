import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import PandaLogo from "../../assets/svg/panda-svg.svg";
import { MenuOutlined } from '@ant-design/icons';
import "./Header.css";
import HeaderMenu from './HeaderMenu';

const Navbar = () => {
  const currentRoute = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleToggleMenu =()=>{
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const stickyPoint = 1;
      if (currentScrollY > stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);


  return (
    <>
      {
        menuOpen &&
        <HeaderMenu closeMenu={closeMenu} /> 
      }
      <div className={` bg-[#060912] w-full ${isSticky ? 'fixed z-[9] left-0 right-0 is-sticky' : 'static z-[100]' } `}>
      <div className='flex justify-between w-full max-w-[1200px] px-4 sm:px-0 mx-auto py-4'>
        <div className="w-unset sm:w-[20%] cursor-pointer">
          <Link to='/' className='flex items-center gap-4 w-max'>
            <img
              src={PandaLogo}
              alt="Shiba Dev"
              className="w-[50px]"
            />
            <span className="uppercase text-[#fff] text-[28px] font-semibold"> Shiba Dev </span>
          </Link>
        </div>
        <div className="flex gap-0 md:gap-[30px] w-[40%] sm:w-[80%] items-center justify-end pr-0 md:pr-0">
          <button
            className={`text-[16px] menu-toggle-button text-[#fff] -mt-2`}
            onClick={handleToggleMenu}
          >
            <MenuOutlined style={{color: '#fff'}} /> MENU
          </button>
          
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
