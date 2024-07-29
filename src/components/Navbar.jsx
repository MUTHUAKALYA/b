import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="bg-blue-900 px-8 py-3 flex justify-between items-center">
      <h1 className="text-gray-50 font-bold">Bridge Analytics</h1>
      <section className="flex gap-x-5">
        <FaSearch className="text-white hover:cursor-pointer hover:text-gray-200" />
        <FaBell className="text-white hover:cursor-pointer hover:text-gray-200" />
        <FaUser className="text-white hover:cursor-pointer hover:text-gray-200" />
      </section>
    </header>
  );
};

export default Navbar;
