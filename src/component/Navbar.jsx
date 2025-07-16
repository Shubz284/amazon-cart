import React from 'react'
import {Outlet, useNavigate} from 'react-router'
import { FiShoppingCart } from "react-icons/fi";
import useCartItemsState from '../store/cartItemsState';

const Navbar = () => {
  const navigate = useNavigate()
  const { itemQuantity } = useCartItemsState()
    
  return (
    <div>
      <div className="flex justify-between items-center bg-[#232f3e] text-white pl-2  md:pl-30 pr-2 md:pr-30 py-2 sticky z-1000 top-0">
        <div className="text-[30px] font-[600] cursor-pointer">
          <span onClick={() => navigate("/")}>
            amazon.in
          </span>
        </div>
        <div className="flex items-center  gap-2 ml-10">
          <span className="font-[300] text-[17px]">Hello,User</span>
          <div className='flex'>
            <button onClick={() => navigate("/cart")}><FiShoppingCart className="text-[19px] cursor-pointer" /></button>
            <span className='text-[7px] bg-orange-500 rounded-[50%] px-1.5 py-0.5 -translate-x-2 mb-5'>{itemQuantity}</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar