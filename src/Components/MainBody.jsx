import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import data from "../utils/Data.json";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
} from "recharts";

import { PieChart, Pie, Cell } from 'recharts';
import { useState } from "react";

const MainBody = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-9/12 h-5/12  mx-12">
      <div>
        <div className="flex gap-40 mx-4">
          <h3>Analytics</h3>
          <button>3 months</button>
        </div>
        <div className="flex flex-col">
          <div className="w-10/12 h-7/12 ">
            <BarChart width={600} height={300} data={data}>
              <Bar dataKey="students" fill="green" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </div>
          <div className="w-2xl h-7/12">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart data={data} margin={{ right: 300 }}>
                <CartesianGrid />
                <XAxis dataKey="name" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="fees" stroke="black" activeDot={{ r: 8 }} />
                <Line dataKey="students" stroke="red" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <PieChart width={100} height={100}>
              <Pie
                activeIndex={activeIndex}
                data={data}
                dataKey="students"
                outerRadius={50}
                fill="green"
                onMouseEnter={onPieEnter}
                style={{ cursor: "pointer", outline: "none" }} // Ensure no outline on focus
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
