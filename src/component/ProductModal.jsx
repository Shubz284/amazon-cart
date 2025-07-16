import React, { useState } from "react";
import wishItemState from "../store/wishItemsState";
import { MdCurrencyRupee } from "react-icons/md";
import useCartItemsState from "../store/cartItemsState";
import { useNavigate } from "react-router";
import { Toaster, toast, } from "sonner";

export function ProductModal() {
  const navigate = useNavigate()
  const product = wishItemState((state) => state.product);
  const addToCart = useCartItemsState((state) => state.addToCart);
  const cart = useCartItemsState((state) =>state.cart )

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 m-2">
        {product.map((item) => {
          const isIncart = cart.some((cartItem) =>cartItem.id === item.id )

          return (
            <div
              key={item.id}
              className="flex flex-col  p-5 border border-slate-300"
            >
              <img src={item.image} className="w-60" />
              <span className="text-[16px]">{item.name}</span>
              <span className="flex items-center">
                <MdCurrencyRupee />
                {item.price.toFixed(2)}
              </span>
              <Toaster richColors />
              <button
                className="bg-yellow-300 text-[15px] font-[550] w-full rounded-xs cursor-pointer p-1.5"
                onClick={() => {
                  if (isIncart) {
                    navigate("/cart");
                  } else {
                    addToCart(item);
                  }
                  toast.success("Added to cart");
                }}
              >
                {isIncart ? "Proceed to checkout" : "Add to cart"}
              </button>
            </div>
          );})}
      </div>
    </div>
  );
};


export default ProductModal;
