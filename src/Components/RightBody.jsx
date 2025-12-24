import React, { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import data from "../utils/Data.json";

const RightBody = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="border bg-gray-100 mx-5 rounded-2xl w-auto">
        <div>
          <h3 className="ml-3">lorem ipsum</h3>
          <div className=" my-4 rounded-2xl bg-gray-300">
            <button className="hover:bg-green-500 bg-gray-300 mx-2 px-2 rounded-xl">
              All-in
            </button>
            <button className="hover:bg-gray-300 bg-green-500  mx-2 px-2 rounded-xl">
              Dolor sit amet
            </button>
          </div>
        </div>
        <h3>Dolor sit Amet</h3>
        <div>
          <div className="bg-white">
            <h4>In this site</h4>
          </div>
          <LineChart
            style={{
              width: "100%",
              aspectRatio: 1.618,
              maxWidth: 200,
              margin: "auto",
            }}
            responsive
            data={data}
          >
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            {/* <YAxis width="auto" /> */}
            <Line type="monotone" dataKey="students" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="fees" stroke="#82ca9d" /> */}
            <RechartsDevtools />
          </LineChart>
          <div className="flex gap-15 my-3 mx-5">
            <button className="px-5 py-2 bg-white rounded-3xl hover:bg-green-500">
              Yearly
            </button>
            <button className="px-5 py-2 bg-white rounded-3xl hover:bg-green-500">
              Monthly
            </button>
            <button className="px-8 py-2 bg-white rounded-3xl hover:bg-green-500">
              Day
            </button>
          </div>
        </div>
      </div>
      <div className="border bg-gray-100 mx-5 rounded-2xl w-auto mt-3 pb-20">
        <h2 className="text-sm mx-3 my-5">Lorem Ipsum</h2>
        <div className="flex gap-10 mx-25">
          <div>
            <h1 className="font-bold my-2">Top Products</h1>
            <ol style={{ listStyleType: 'decimal' }}>
                <li className="text-sm">Lorem Ipsum</li>
                <li className="text-sm">Lorem Ipsum</li>
                <li className="text-sm">Lorem Ipsum</li>
            </ol>
          </div>
          <div>
            <h1  className="font-bold my-2">Top Buyer</h1>
            <ol style={{ listStyleType: 'decimal' }}>
                <li className="text-sm">Lorem Ipsum</li>
                <li className="text-sm">Lorem Ipsum</li>
                <li className="text-sm">Lorem Ipsum</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
