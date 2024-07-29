import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Button from "./components/Button";
import SuccessMessage from "./components/SuccessMessage";
import TotalSales from "./components/TotalSales";
import TotalOrder from "./components/TotalOrder";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start  pe-5 ">
        <SideBar />
        <section className="flex flex-col bg-gray-100 w-screen h-screen">
          <Button />
          <TotalSales />
          <TotalOrder />
          <OrderSummary />
        </section>
      </section>
    </>
  );
};

export default App;
