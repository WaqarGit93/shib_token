import Certik from "../../../assets/svg/certik.svg";
import "./Audit.css";
import Bury from "../../../assets/svg/bury.svg";
import Swap from "../../../assets/svg/swap-tokens.svg";
import Dig from "../../../assets/svg/dig.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const Audit = () => {
  return (
    <section className="w-full bg-[#000] py-[50px] sm:py-[100px]">
        <div className="main-container text-center pb-6 sm:pb-10 px-4 md:px-2 lg:px-0">
            <h1 className="mb-2 text-[28px] sm:text-[48px] leading-[36px] sm:leading-[56px] poppins-bold text-center text-white">
                Shibaswap
            </h1>
            <p className="text-[18px]"> Decentralized Exchange </p>
        </div>
        <div className="main-container flex flex-col sm:flex-row gap-6 justify-between items-center px-4 md:px-2 lg:px-0">
            <div className="swap-main flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2">
                <a href="#" className="swap-wrap flex justify-between items-center gap-4 sm:gap-6 rounded-xl py-4 px-4 sm:px-10">
                    <div className="token-header flex items-center gap-4">
                        <img src={Bury} alt="missing" className="w-[60px]" />
                        <div className="flex flex-col gap-1"> 
                            <h3 className="poppins-medium"> Bury </h3>
                            <p> Stake and Earn Rewards </p>
                        </div>
                    </div>
                    <div className="token-body flex flex-col gap-6">
                        <ArrowRightOutlined className="text-[22px] font-medium" />
                    </div>
                </a>
                <a href="#" className="swap-wrap flex justify-between items-center gap-4 sm:gap-6 rounded-xl py-4 px-4 sm:px-10">
                    <div className="token-header flex items-center gap-4">
                        <img src={Swap} alt="missing" className="w-[60px]" />
                        <div className="flex flex-col gap-1"> 
                            <h3 className="poppins-medium"> Swap </h3>
                            <p> Stake and Earn Rewards </p>
                        </div>
                    </div>
                    <div className="token-body flex flex-col gap-6">
                        <ArrowRightOutlined className="text-[22px] font-medium" />
                    </div>
                </a>
                <a href="#" className="swap-wrap flex justify-between items-center gap-4 sm:gap-6 rounded-xl py-4 px-4 sm:px-10">
                    <div className="token-header flex items-center gap-4">
                        <img src={Dig} alt="missing" className="w-[60px]" />
                        <div className="flex flex-col gap-1"> 
                            <h3 className="poppins-medium">Dig </h3>
                            <p> Stake and Earn Rewards </p>
                        </div>
                    </div>
                    <div className="token-body flex flex-col gap-6">
                        <ArrowRightOutlined className="text-[22px] font-medium" />
                    </div>
                </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-8 sm:mb-10 w-full sm:w-1/2">
                <h4> Audited by Cretik </h4>
                <img src={Certik} alt='missing' />
                <a href="#" className="btn-primary !w-max"> 
                    <span> Audit Overview </span> <ArrowRightOutlined className="text-[18px] font-medium" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Audit;