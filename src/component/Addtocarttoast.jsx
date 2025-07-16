import React, { useState } from 'react'
import { CiCircleCheck } from "react-icons/ci";


const Tooltip = ({children}) => {
    return (
      <div className="transdform transiton-all delay-500 duration 100">
        <span className="flex justify-center gap-1 items-center">{children}</span>
      </div>
    );
}


const Addtocarttoast = () => {
  return (
    <div>
        <Tooltip >
            <h3>Added to cart</h3>
            <CiCircleCheck />
        </Tooltip>
    </div>
  )
}

export default Addtocarttoast