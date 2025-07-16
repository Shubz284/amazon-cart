import React, { useState } from 'react'
import { GoShareAndroid } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { IoMdGrid } from "react-icons/io";
import { IoIosList } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Sidebar from './Sidebar';
import ProductModal from './ProductModal';

const WishList = () => {
  
  return (
    <div className="flex ">
      <Sidebar />
      <div className="h-screen w-full">
        <div className="flex justify-between items-center p-3">
          <div className="p-1 ">
            <h1 className="text-black text-2xl font-[700]">Your Wish List</h1>
            <span className="text-slate-800 text-[13px]">Public</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500 text-[16px] font-[500]">
            <span>
              <GoShareAndroid />
            </span>
            <span>Send list to others</span>
            <span className="text-black">
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="flex item-center text-[25px] gap-3 ">
            <span>
              <IoMdGrid />
            </span>
            <span>
              <IoIosList />
            </span>
          </div>
          <div className="flex gap-3">
            <div className=" flex gap-1  items-center border border-slate-400 rounded-xs">
              <CiSearch className="ml-1" />
              <input type="text" placeholder="Search this list" className="outline-none text-[14px] font-[500]"/>
            </div>
            <div>
              <select name="dropdown" className="border border-slate-400 rounded-xs outline-none text-[14px] font-[500]">
                <option>Filter & Sort</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <ProductModal />
        </div>
      </div>
    </div>
  );
}

export default WishList