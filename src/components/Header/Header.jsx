
// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from "react-router-dom";
// import PandaLogo from "../../assets/svg/panda-svg.svg";
// import { MenuOutlined } from '@ant-design/icons';
// import "./Header.css";
// import HeaderMenu from './HeaderMenu';

// const Navbar = () => {
//   const currentRoute = useLocation();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isSticky, setSticky] = useState(false);
//   const [prevScrollY, setPrevScrollY] = useState(0);


//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleToggleMenu =()=>{
//     setMenuOpen(!menuOpen);
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const stickyPoint = 1;
//       if (currentScrollY > stickyPoint) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//       setPrevScrollY(currentScrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollY]);


//   return (
//     <>
//       {
//         menuOpen &&
//         <HeaderMenu closeMenu={closeMenu} /> 
//       }
//       <div className={` bg-[#060912] w-full ${isSticky ? 'fixed z-[9] left-0 right-0 is-sticky' : 'static z-[100]' } `}>
//       <div className='flex justify-between w-full max-w-[1200px] px-4 sm:px-0 mx-auto py-4'>
//         <div className="w-unset sm:w-[20%] cursor-pointer">
//           <Link to='/' className='flex items-center gap-4 w-max'>
//             {/* <img
//               src={PandaLogo}
//               alt="Shiba Dev"
//               className="w-[50px]"
//             /> */}
//             <span className="uppercase text-[#fff] text-[28px] font-semibold"> sioe </span>
//           </Link>
//         </div>
//         <div className="flex gap-0 md:gap-[30px] w-[40%] sm:w-[80%] items-center justify-end pr-0 md:pr-0">
//           <button
//             className={`text-[16px] menu-toggle-button text-[#fff] -mt-2`}
//             onClick={handleToggleMenu}
//           >
//             <MenuOutlined style={{color: '#fff'}} /> MENU
//           </button>
          
//         </div>
//       </div>
//     </div>
//     </>
    
//   )
// }

// export default Navbar




import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = ({activeSection, Username, setUsername, setUserOwns, setSession}) => {
  const currentRoute = useLocation();
  const activeStyle = "text-[#C61E46] font-montserat text-[14px] font-medium";
  const nonActiveStyle = "font-[500] text-[#fff] font-montserat text-[14px] font-medium";
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

  const HandleLogout = () => {
    // axios.postForm(`${BASE_URL}/Logout/`, 
    // { user_id: userId })
    // .then((res) => {
    //   console.log("res", res.data)
    // })
    // .catch((err) => {
    //   console.log("err",err)
    // })
    localStorage.removeItem("sioe_token_id")
    localStorage.removeItem("sioe_user_id")
    localStorage.removeItem("sioe_username")
    localStorage.removeItem("sioe_email")
    setUsername('')
    setUserOwns({
      TotalAmount: '',
      TotalTokens: ''
    })
    setSession(false)
  } 


  return (
    <header className='w-full relative'>
      <div className={`bg-[#1f282f] w-full z-[100] ${isSticky ? "fixed top-0": "static"}`}>
      <div className='flex justify-between gap-[100px] sm:gap-[150px] w-full max-w-[1200px] mx-auto'>
        <div className="w-unset sm:w-[10%] p-4 cursor-pointer">
          <Link to='/'>
            {/* <img
              src={GravityLogo}
              alt="Creative.dot"
              className="rounded-full w-[150px]"
            /> */}
            <span className="uppercase text-[#fff] text-[28px] font-semibold"> sioe </span>
          </Link>
        </div>
        <div className="flex gap-0 md:gap-[30px] w-[40%] sm:w-[90%] items-center justify-end pr-4 md:pr-0">
          <button
            className={`text-[24px] md:hidden -mt-2 ${isSticky ? 'text-[#fff]' : 'text-[#867767]'}`}
            onClick={handleToggleMenu}
          >
            {menuOpen ? <CloseOutlined style={ isSticky ? {color: '#fff'} : {color: '#fff'}} />  : 
              <MenuOutlined style={ isSticky ? {color: '#fff'} : {color: '#fff'}} />}
          </button>
          <div
          className={`md:flex md:items-center gap-[10px] sm:gap-[30px] md:gap-[42px] lg:gap-[50px] md:top-[100px] ${
            menuOpen ? 'flex flex-col mt-6 md:top-[100px] absolute top-[32px] left-[0px] bg-[#000] w-[100%] py-[10px] px-[20px] gap-[14px] z-[100]' : 'hidden'
          }`}
        >
            <a href="#Staking">
              <div className="flex hover:text-[#C61E46] bg-fixed transition duration-300 ease-in-out rounded-lg">
                <li className={`flex ${activeSection, Username === "Staking" ? activeStyle : nonActiveStyle}`} onClick={closeMenu}>
                  Staking 
                </li>
              </div>
            </a>
            <a href="#Investment">
              <div className="flex hover:text-[#C61E46] bg-fixed  transition duration-300 ease-in-out rounded-lg">
                <li className={`flex ${activeSection === "Investment" ? activeStyle : nonActiveStyle}`}>
                    Investment Opportunity
                </li>
              </div>
            </a>
            <a href="#Plans">
              <div className="flex  hover:text-[#C61E46] bg-fixed  transition duration-300 ease-in-out rounded-lg">
                <li className={`flex ${activeSection === "Plans" ? activeStyle : nonActiveStyle}`}>
                  Plans
                </li>
              </div>
            </a>
            <a href="#Learn">
              <div className="flex  hover:text-[#C61E46] bg-fixed  transition duration-300 ease-in-out rounded-lg">
                <li className={`flex ${activeSection === "Learn" ? activeStyle : nonActiveStyle}`}>
                  Learn
                </li>
              </div>
            </a>
            <a href="#About">
              <div className="flex  hover:text-[#C61E46] bg-fixed  transition duration-300 ease-in-out rounded-lg">
                <li className={`flex ${activeSection === "About" ? activeStyle : nonActiveStyle}`}>
                  About us
                </li>
              </div>
            </a>
          </div>
          <div className="flex gap-6">
            {/* <button className="font-montserat font-[700] text-[#E3204B] text-[0.75em] captilize px-3 hidden lg:block">Speak to an Expert</button> */}
            {
              Username ? 
              <button onClick={HandleLogout} className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" >
               Hi! {Username}/ Logout
              </button> :
              <Link to='/login' className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" >
                Sign Up/Sign In
              </Link>
            }
            
            <button className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Navbar
