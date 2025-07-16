import React, { useState } from 'react'
import useCartItemsState from '../store/cartItemsState'
import { MdCurrencyRupee } from "react-icons/md";
import PurchaseModal from './PurchaseModal';

const AmazonCart = () => {
  const cart = useCartItemsState((state) => state.cart)
  const {total, itemQuantity} = useCartItemsState()
  const removeFromCart = useCartItemsState((state) => state.removeFromCart);
  const updateQuantity = useCartItemsState((state) => state.updateQuantity )
  const decreaseQuantity = useCartItemsState((state) => state.decreaseQuantity)
  console.log(cart)
  
  return (
    <div className=" flex flex-col md:flex-row justify-center md:justify-between gap-2 h-screen bg-slate-200 py-10">
      <div className=" w-screen md:w-270 h-full bg-white rounded-lg p-5">
        <h2 className="text-3xl font-[700]">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className='flex justify-center items-center text-2xl mt-50'>Your cart is empty. Checkout wishlist for purchase </p>
        ):(
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-3 mt-4 border-b border-slate-400"
            >
              <div className="flex gap-3">
                <div>
                  <span>
                    <img src={item.image} className="w-18" />
                  </span>
                </div>
                <div>
                  <h1 className="text-lg font-[500]">{item.name}</h1>
                  <span className="text-green-400">In stock</span>
                  <div className="space-x-2">
                    <button className="bg-slate-300 px-2 cursor-pointer" onClick={() => decreaseQuantity(item.id)}>{item.quantity === 0 ? null : "-"}</button>
                    <span>{item.quantity}</span>
                    <button className="bg-slate-300 px-1.5 cursor-pointer" onClick={() => updateQuantity(item.id)} >+</button>
                    <button className="text-blue-700 cursor-pointer" onClick={() => removeFromCart(item.id)} >Delete</button>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-center">
                  <MdCurrencyRupee />
                  {item.price.toFixed(2)*item.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
      <div className=" bg-white h-50 w-80 md:w-80  rounded-lg mr-1 p-7">
        <div className="text-xl font-[700] mb-2">Order Summary</div>
        <div className="flex justify-between text-[15px] font-[550]">
          <span>Items:({itemQuantity})</span>
          <div className='flex items-center'> <MdCurrencyRupee/> {total.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-3 text-lg font-[700]">
          <span>Order Total:</span>
          <div className='flex items-center'> <MdCurrencyRupee/> {total.toFixed(2)}</div>
        </div>
        <div className=" flex justify-center items-center mt-5 ">
            <PurchaseModal />
        </div>
      </div>
    </div>
  );
}

export default AmazonCart