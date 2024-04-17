import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Audit from "../components/Home/Audit/Audit";
import Features from "../components/Home/Features/Features";
import About from "../components/Home/About/About";
import Faqs from "../components/Home/Faqs/Faqs";

const Home = () => {
  return (
    <article className="w-full bg-[#1f282f]">
      {/* <Banner />
      <Audit /> */}
      <Features />
      <About />
      <Faqs />
    </article>
  );
};

export default Home;
