import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import data from "../utils/Data.json";

const RightBody = () => {
  return (
    <div className="w-80 space-y-6">
      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold mb-4">Lorem Ipsum</h3>

        <div className="bg-gray-100 p-1 rounded-full flex w-fit">
          <button className="px-4 py-1 text-sm rounded-full text-gray-600 hover:bg-[#2f7d6d]">
            All-in
          </button>

          <button className="px-4 py-1 text-sm rounded-full text-gray-600 hover:bg-[#2f7d6d]">
            Dolor sit amet
          </button>
        </div>

        <p className="font-semibold my-3">Dolor Sit Ammet</p>

        <div className="bg-gray-100 pt-2 p-2 rounded-md">
          <div className="grid grid-cols-3 text-center mb-4 bg-white outline-none rounded-full mt-1 mx-2">
            <div>
              <p className="font-semibold">230</p>
              <p className="text-sm text-gray-500">Sold out</p>
            </div>

            <div>
              <p className="font-semibold">2</p>
              <p className="text-sm text-gray-500">Refund</p>
            </div>

            <div>
              <p className="font-semibold">1500</p>
              <p className="text-sm text-gray-500">Stock</p>
            </div>
          </div>

          <div className="w-full h-22.5 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.analytics}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#2f7d6d"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between">
            <button className="border px-4 py-1 rounded-full text-sm">
              Yearly
            </button>
            <button className="border px-4 py-1 rounded-full text-sm">
              Monthly
            </button>
            <button className="border px-4 py-1 rounded-full text-sm">
              Day
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-semibold mb-4">Lorem Ipsum</h3>

        <div className="flex justify-between">
          <div>
            <p className="font-semibold mb-2">Top Products</p>
            <ol className="list-decimal ml-4 text-sm space-y-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold mb-2">Top Buyer</p>
            <ol className="list-decimal ml-4 text-sm space-y-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
