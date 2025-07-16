import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import useCartItemsState from "../store/cartItemsState";

const Modal = ({ onClose, isOpen, children }) => {    
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "10px",
        }}
      > {children}
        <button onClick={onClose} className="bg-blue-700 w-full text-white mt-3 p-3 cursor-pointer">Close</button>
      </div>
    </div>
  );
};

const PurchaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { total } = useCartItemsState();

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-65 bg-yellow-400 rounded-xs p-2 cursor-pointer">Proceed to Buy</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-[500]">Purchase Successful!</h2>
        <div>
          <FiCheckCircle className=" text-3xl m-0 m-auto text-green-700 mt-3" />
          <p className="mt-2">
            Thank you for your purchase. Your order has been successfully
            processed.
          </p>
          <p className=" text-lg font-[500] mt-3">Total Amount: ₹{total}</p>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseModal;
