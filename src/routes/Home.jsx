import React from "react";
// import Banner from "../components/Home/Banner/Banner";
// import Audit from "../components/Home/Audit/Audit";
import Features from "../components/Home/Features/Features";
import About from "../components/Home/About/About";
import Faqs from "../components/Home/Faqs/Faqs";
import UserTotalOwns from "../components/Home/UserTotalOwns/UserTotalOwns";

const Home = ({UserOwns, setUserOwns, Session, Activities, setActivities, Reload, setReload}) => {
  return (
    <article className="w-full bg-[#1f282f]">
        <UserTotalOwns 
          UserOwns={UserOwns} setUserOwns={setUserOwns} Session={Session}
          Activities={Activities} setActivities={setActivities}
          Reload={Reload} setReload={setReload}
        /> 
      <Features />
      <About />
      <Faqs />
    </article>
  );
};

export default Home;
