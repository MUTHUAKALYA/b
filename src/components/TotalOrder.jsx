import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
} from "recharts";
const TotalOrder = () => {
  const data = [
    {
      name: "Jan",
      Incoming: 17000,
      Fulfillment: 27000,
    },
    {
      name: "Feb",
      Incoming: 18000,
      Fulfillment: 22000,
    },
    {
      name: "Mar",
      Incoming: 32000,
      Fulfillment: 23000,
    },
    {
      name: "Apr",
      Incoming: 28000,
      Fulfillment: 33000,
    },
    {
      name: "May",
      Incoming: 20000,
      Fulfillment: 14000,
    },
    {
      name: "Jun",
      Incoming: 16000,
      Fulfillment: 8000,
    },
    {
      name: "Jul",
      Incoming: 15000,
      Fulfillment: 22000,
    },
    {
      name: "Aug",
      Incoming: 15000,
      Fulfillment: 25000,
    },
    {
      name: "Sep",
      Incoming: 20000,
      Fulfillment: 32000,
    },
    {
      name: "Oct",
      Incoming: 28000,
      Fulfillment: 20000,
    },
    {
      name: "Nov",
      Incoming: 14000,
      Fulfillment: 21000,
    },
    {
      name: "Dec",
      Incoming: 9000,
      Fulfillment: 28000,
    },
  ];
  return (
    <section className="bg-white p-5 w-[1100px] h-[460px] m-5 flex flex-col justify-center items-center rounded-lg">
      <h1 className="text-gray-900 font-semibold text-xl">
        Total Order Fulfillment vs Order Incoming
      </h1>

      <BarChart width={1000} height={250} data={data} className="m-5">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Incoming" fill="#bae6fd" />
        <Bar dataKey="Fulfillment" fill="#60a5fa" />
      </BarChart>
    </section>
  );
};

export default TotalOrder;
