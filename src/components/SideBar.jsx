import React from "react";
import { FaDashcube } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const SideBar = () => {
  return (
    <nav className="bg-gray-50 h-screen w-20 p-2 text-sm space-y-4 flex flex-col ">
      <div className="text-gray-400 flex flex-col items-center justify-center">
        <FaCartShopping className="w-6 h-8" />
        <span>Sales</span>
      </div>
      <div className="text-gray-400 flex flex-col items-center justify-center">
        <FaCartShopping className="w-6 h-6 " />
        <span>Purchase</span>
      </div>
    </nav>
  );
};

export default SideBar;
