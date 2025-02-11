
import axios from "axios";
import { BASE_URL } from "../../../constents";
import { useEffect, useRef, useState } from "react";
import BuySellModal from "../../Modals/BuySellModal";
import MoneyTraModal from "../../Modals/MoneyTraModal";

const UserTotalOwns = ({UserOwns, setUserOwns, Session, Activities, setActivities, Reload, setReload}) => {

    // const EffectHasRun = useRef(true);
    const [UserID, setUserID] = useState();

    useEffect(()=>{
        setUserID(localStorage.getItem("sioe_user_id"))
    },[])

    useEffect(()=>{

      if(UserID) {
        axios.postForm(`${BASE_URL}/TokenDetail/`, 
          { user_id: UserID })
          .then((res) => {
            setUserOwns({
              TotalAmount: res?.data?.total_amount,
              TotalTokens: res?.data?.total_token
            });
          })
          .catch((err) => {
            console.log("err",err)
          })
    
          axios.get(`${BASE_URL}/TokenDetail/?user_id=${UserID}`)
          .then((res) => {
            setActivities(res?.data);
          })
          .catch((err) => {
            console.log("err",err)
          })
        }
    
        // EffectHasRun.current = false;
    },[UserID, Reload])

  return (
    <>
    {
        Session ? 
        <section>
        <div className='main-container pt-[100px]'>
            <h1 className="mb-2 text-[28px] sm:text-[32px] leading-[36px] sm:leading-[42px] poppins-semibold text-center text-white mb-6 sm:mb-10">
                Your Account Details
            </h1>
            <div className="flex justify-end gap-5 py-4">
                <MoneyTraModal Reload={Reload} setReload={setReload} />
            </div>
            <table className="min-w-full rounded-xl">
                <thead>
                    <tr>
                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Total Tokens
                        </th>
                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Total Amount
                        </th>
                        {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" /> */}
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {UserOwns?.TotalTokens}
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {UserOwns?.TotalAmount}
                        </p>
                    </td>
                    </tr>
                </tbody>     
            </table>
        </div>

        <div className='main-container pt-[100px]'>
            <div className="flex justify-end gap-5 py-4">
                <BuySellModal Reload={Reload} setReload={setReload} />
            </div>
            <table className="min-w-full rounded-xl">
                <thead>
                    <tr>
                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Date & Time
                        </th>
                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Transction Type
                        </th>
                        <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Total Tokens
                        </th>
                    </tr>
                </thead>   
                <tbody>
                    {Activities?.map((item, index) => {
                        // console.log("item", item)
                    return (
                        <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.timestamp}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.transaction_type}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {item?.total_token}
                                </p>
                            </td>
                        </tr>
                    );
                    })}
                </tbody>     
            </table>
        </div>
    </section> 
    :
    <></>
    } 
    </>
   
  )
}

export default UserTotalOwns