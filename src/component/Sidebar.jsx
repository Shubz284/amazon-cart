import React from 'react'

const Sidebar = () => {
  return (
      <div className="h-screen md:w-76 hidden md:block border-r px-10 p-5">
        <div className="border border-slate-200 bg-slate-100 rounded-[5px] p-1 ">
          <h1 className="text-black text-2xl font-[700]">Your Wish List</h1>
          <span className="text-slate-800 text-[13px]">Default List</span>
        </div>
      </div>
  );
}

export default Sidebar