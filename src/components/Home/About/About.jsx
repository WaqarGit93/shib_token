import React from "react";

const About = () => {
  return (
    <section className="w-full py-[50px] sm:py-[100px]">
      <div className="main-container text-center pb-6 sm:pb-10 px-4 md:px-2 lg:px-0">
        <h1 className="mb-2 text-[28px] sm:text-[32px] leading-[36px] sm:leading-[42px] poppins-semibold text-center text-white">
          About Us
        </h1>
        <p className="text-[16px] text-[#737a85]"> Lorem Ipsum is simply dummy </p>
        <div className="w-full sm:w-[70%] text-center mx-auto mt-8 sm:mt-12">
          <p className="leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            odio eget est blandit faucibus. Pellentesque vel est hendrerit,
            pharetra lectus eget, congue dolor. Vivamus eu facilisis ligula, sed
            posuere nulla. Suspendisse elementum vestibulum est ac mattis.
            Maecenas scelerisque rutrum odio, vel congue mauris cursus id. Morbi
            finibus nisl nisl, eu vulputate dui consequat vel. In mollis diam ac
            nisl ultrices vulputate. Nam finibus posuere elit non consectetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
