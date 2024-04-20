import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { BASE_URL } from '../../constents';
import Swal from 'sweetalert2';

Modal.setAppElement('#root');

const MoneyTraModal = ({Reload, setReload}) => {
  const [WithDrawModalIsOpen, setWithDrawModalIsOpen] = useState(false);
  const [AddmodalIsOpen, setAddModalIsOpen] = useState(false);
  const [wDrawAmountInput, setwDrawAmountInput] = useState();
  const [AddAmountInput, setAddAmountInput] = useState();

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

  const openWithdrawModal = () => {
    setWithDrawModalIsOpen(true);
  };

  const closeSellModal = () => {
    setWithDrawModalIsOpen(false);
  };

  const openAddModal = () => {
    setAddModalIsOpen(true);
  };

  const closeBuyModal = () => {
    setAddModalIsOpen(false);
  };

  const HandleWithDrawInput = (e) => {
    const value = e.target.value;
    setwDrawAmountInput(value);
  }

  const HandleAddAmountInput = (e) => {
    const value = e.target.value;
    setAddAmountInput(value);
  }
 


  const handleSubmit = (type) => {
    if(type === 'send') {
      setWithDrawModalIsOpen(false);
      axios.postForm(`${BASE_URL}/PaymentRecord/`, 
        { 
            total_price: wDrawAmountInput,
            type: type,
            user_id: localStorage.getItem("sioe_user_id")
        }
      )
      .then((res) => {
        if(res?.data?.status === true) {
            Swal.fire({
                title: res.data.message,
                icon: 'success',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
            setwDrawAmountInput('')
            setReload(!Reload)
            window.scrollTo({ behavior: 'smooth', top: 100 });
        } else {
            Swal.fire({
                title: res.data.message,
                icon: 'error',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
        }
       
        // window.location.reload();
      })
      .catch((err) => {
      console.log("err",err)
      })
    }

    if(type === 'receive') {
      setAddModalIsOpen(false);
      axios.postForm(`${BASE_URL}/PaymentRecord/`, 
        { 
            total_price: AddAmountInput, 
            type: type,
            user_id: localStorage.getItem("sioe_user_id")
        })
      .then((res) => {
        if(res?.data?.status === true) {
            Swal.fire({
                title: res.data.message,
                icon: 'success',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
            setAddAmountInput('')
            setReload(!Reload)
            window.scrollTo({ behavior: 'smooth', top: 100 });
        } else {
            Swal.fire({
                title: res.data.message,
                icon: 'error',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
        }
      })
      .catch((err) => {
          console.log("err",err)
      })
    }
}

  return (
    <>
      <button onClick={openAddModal} 
        className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" 
      >
       $ Add
      </button>
      <button onClick={openWithdrawModal} 
        className="font-tajawal text-[0.75em] hover:bg-[#465656] border border-gray-600 icon-slide py-2 px-8 hidden lg:block" 
      >
       $ Withdraw
      </button>

      <Modal
        isOpen={WithDrawModalIsOpen}
        onRequestClose={closeSellModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeSellModal} className='absolute right-2 top-2 z-[999] bg-[#000] p-2 shadow-lg rounded-[50%] flex justify-center items-center'>
          <CloseCircleOutlined style={{ fontSize: '24px', color: '#fff'}} />
        </button>


        <div className="ra-login-form w-full w-[95%] sm:w-[300px] pt-4">
          <form className="max-w-[90%] mx-auto" onSubmit={()=> handleSubmit('send')}>
            <div className="mb-6">
              <label
                htmlFor="WithDrawAmount"
                className="block mb-2 text-sm font-medium text-white poppins-family text-[#fff]"
              >
                Enter Amount for WithDraw from Wallet
              </label>
              <input
                type="text"
                id="WithDrawAmount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Enter $ Amount"
                value={wDrawAmountInput}
                name="WithDrawAmount"
                onChange={HandleWithDrawInput}
                required=""
              />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
              >
                WithDraw Now
              </button>
            </div>

          </form>
        </div>

      </Modal>


      <Modal
        isOpen={AddmodalIsOpen}
        onRequestClose={closeBuyModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeBuyModal} className='absolute right-2 top-2 z-[999] bg-[#000] p-2 shadow-lg rounded-[50%] flex justify-center items-center'>
            <CloseCircleOutlined style={{ fontSize: '24px', color: '#fff'}} />
        </button>


        <div className="ra-login-form w-full w-[95%] sm:w-[300px] pt-4">
          <form className="max-w-[90%] mx-auto" onSubmit={()=> handleSubmit('receive')}>
            <div className="mb-6">
              <label
                htmlFor="AddAmount"
                className="block mb-2 text-sm font-medium text-white poppins-family text-[#fff]"
              >
                Enter Amount for Add to Wallet
              </label>
              <input
                type="text"
                id="AddAmount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Enter $ Amount"
                value={AddAmountInput}
                name="AddAmount"
                onChange={HandleAddAmountInput}
                required=""
              />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] text-white bg-sec hover:bg-[#8bc53f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-family transition-all duration-500"
              >
                Add Now
              </button>
            </div>

          </form>
        </div>

      </Modal>

    </>
  );
};

export default MoneyTraModal;
