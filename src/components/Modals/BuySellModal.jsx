import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { BASE_URL } from '../../constents';
import Swal from 'sweetalert2';

const BuySellModal = () => {
  const [SellModalIsOpen, setSellModalIsOpen] = useState(false);
  const [BuymodalIsOpen, setBuyModalIsOpen] = useState(false);
  const [SellTokensInput, setSellTokensInput] = useState();
  const [BuyTokensInput, setBuyTokensInput] = useState();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#000',
      borderRadius: '12px'
    },
  };

  const openSellModal = () => {
    setSellModalIsOpen(true);
  };

  const closeSellModal = () => {
    setSellModalIsOpen(false);
  };

  const openBuyModal = () => {
    setBuyModalIsOpen(true);
  };

  const closeBuyModal = () => {
    setBuyModalIsOpen(false);
  };

  const HandleSellInput = (e) => {
    const value = e.target.value;
    setSellTokensInput(value);
  }

  const HandleBuyInput = (e) => {
    const value = e.target.value;
    setBuyTokensInput(value);
  }



  const handleSubmit = (type) => {
    if(type === 'selling') {
      setSellModalIsOpen(false);
      axios.putForm(`${BASE_URL}/TokenDataSave/`, 
        { 
            total_token: SellTokensInput,
            type: type,
            token_id: localStorage.getItem("sioe_token_id"),
            user_id: localStorage.getItem("sioe_user_id")
        }
      )
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon: 'succuss',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        })
        window.scrollTo({ behavior: 'smooth', top: 700 });
        window.location.reload();
      })
      .catch((err) => {
      console.log("err",err)
      })
    }

    if(type === 'buying') {
      setBuyModalIsOpen(false);
      axios.postForm(`${BASE_URL}/TokenDataSave/`, 
        { 
            total_amount: BuyTokensInput, 
            type: type,
            token_id: localStorage.getItem("sioe_token_id"),
            user_id: localStorage.getItem("sioe_user_id")
        })
      .then((res) => {
          Swal.fire({
            title: res.data.message,
            icon: 'succuss',
            showConfirmButton: true,
            confirmButtonText: 'Ok'
          })
          window.scrollTo({ behavior: 'smooth', top: 700 });
          window.location.reload();
      })
      .catch((err) => {
          console.log("err",err)
      })
    }
}

  return (
    <>
      <button onClick={openBuyModal} 
        className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" 
      >
        Buy
      </button>
      <button onClick={openSellModal} 
        className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" 
      >
        Sell
      </button>

      <Modal
        isOpen={SellModalIsOpen}
        onRequestClose={closeSellModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeSellModal} className='absolute right-2 top-2 z-[999] bg-[#000] p-2 shadow-lg rounded-[50%] flex justify-center items-center'>
          <CloseCircleOutlined style={{ fontSize: '24px', color: '#fff'}} />
        </button>


        <div className="ra-login-form w-full w-[95%] sm:w-[300px] pt-4">
          <form className="max-w-[90%] mx-auto">
            <div className="mb-6">
              <label
                htmlFor="SellTokens"
                className="block mb-2 text-sm font-medium text-white poppins-family text-[#fff]"
              >
                How many tokens want to sell?
              </label>
              <input
                type="text"
                id="SellTokens"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Enter Tokens"
                value={SellTokensInput}
                name="SellTokens"
                onChange={HandleSellInput}
                required=""
              />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                onClick={()=> handleSubmit('selling')}
              >
                Sell
              </button>
            </div>

          </form>
        </div>

      </Modal>


      <Modal
        isOpen={BuymodalIsOpen}
        onRequestClose={closeBuyModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeBuyModal} className='absolute right-2 top-2 z-[999] bg-[#000] p-2 shadow-lg rounded-[50%] flex justify-center items-center'>
            <CloseCircleOutlined style={{ fontSize: '24px', color: '#fff'}} />
        </button>


        <div className="ra-login-form w-full w-[95%] sm:w-[300px] pt-4">
          <form className="max-w-[90%] mx-auto">
            <div className="mb-6">
              <h5 className='mb-3'> $1 = 20 tokens </h5>
              <label
                htmlFor="BuyTokens"
                className="block mb-2 text-sm font-medium text-white poppins-family text-[#fff]"
              >
                How many tokens want to Buy?
              </label>
              <input
                type="text"
                id="BuyTokens"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Enter Tokens"
                value={BuyTokensInput}
                name="BuyTokens"
                onChange={HandleBuyInput}
                required=""
              />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
                onClick={()=> handleSubmit('buying')}
              >
                Buy Now
              </button>
            </div>

          </form>
        </div>

      </Modal>

    </>
  );
};

export default BuySellModal;
