import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TotalSales = () => {
  const data = [
    {
      name: "Jan",
      uv: 5000,
      pv: 1800,
      //   amt: 2400,
    },
    {
      name: "Feb",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Mar",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Apr",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "May",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <section className="bg-white px-5 py-3 w-[50%] h-[380px] mx-5 rounded-lg">
      <h1 className="text-gray-950 font-semibold">Total sales and purchase</h1>
    </section>
  );
};

export default TotalSales;
