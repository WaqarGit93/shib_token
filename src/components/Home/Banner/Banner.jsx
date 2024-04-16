import "./Banner.css";
import SToken from "../../../assets/img/shib-token.png";
import BToken from "../../../assets/img/bone-token.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <section className="hero-banner-main">
      <div className="main-container py-[50px] sm:py-[100px] px-4 md:px-2 lg:px-0">
        <div className="banner-heading mb-8 sm:mb-10">
          <h1 className="text-[28px] sm:text-[48px] leading-[36px] sm:leading-[56px] poppins-bold text-center text-white">
            Shiba Dev Tokens
          </h1>
        </div>
        <div className="tokens-main flex flex-col sm:flex-row gap-8">
          <div className="token-wrap flex flex-col gap-6 rounded-xl p-4">
            <div className="token-header flex items-center gap-4">
              <img src={SToken} alt="missing" className="w-[80px]" />
              <h3 className="text-[#fff] poppins-semibold">
                SHIB TOKEN
              </h3>
            </div>
            <div className="token-body flex flex-col gap-6">
              <p>
                Shiba Inu (SHIB) is our key token, embodying a global,
                decentralized, community-driven currency. Launched in 2020, this
                Ethereum-based token is a global sensation, accepted at numerous
                places directly or via third-parties.
              </p>
              <a href="#" className="btn-primary"> 
                <span> Buy Shib on SHIBASWAP </span> <ArrowRightOutlined className="text-[18px] font-medium" />
              </a>
            </div>
          </div>

          <div className="token-wrap flex flex-col gap-6 rounded-xl p-4">
            <div className="token-header flex items-center gap-4">
              <img src={BToken} alt="missing" className="w-[80px]" />
              <h3 className="text-[#fff] poppins-semibold">
                BONE TOKEN
              </h3>
            </div>
            <div className="token-body flex flex-col gap-6">
              <p>
                Shiba Inu (SHIB) is our key token, embodying a global,
                decentralized, community-driven currency. Launched in 2020, this
                Ethereum-based token is a global sensation, accepted at numerous
                places directly or via third-parties.
              </p>
              <a href="#" className="btn-primary"> 
                <span> Buy Shib on SHIBASWAP </span> <ArrowRightOutlined className="text-[18px] font-medium" />
              </a>
            </div>
          </div>

          <div className="token-wrap flex flex-col gap-6 rounded-xl p-4">
            <div className="token-header flex items-center gap-4">
              <img src={SToken} alt="missing" className="w-[80px]" />
              <h3 className="text-[#fff] poppins-semibold">
                SHIB TOKEN
              </h3>
            </div>
            <div className="token-body flex flex-col gap-6">
              <p>
                Shiba Inu (SHIB) is our key token, embodying a global,
                decentralized, community-driven currency. Launched in 2020, this
                Ethereum-based token is a global sensation, accepted at numerous
                places directly or via third-parties.
              </p>
              <a href="#" className="btn-primary"> 
                <span> Buy Shib on SHIBASWAP </span> <ArrowRightOutlined className="text-[18px] font-medium" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
