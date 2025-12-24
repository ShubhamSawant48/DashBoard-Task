import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import data from "../utils/Data.json";

const COLORS = ["#f59e0b", "#7c3aed", "#3b82f6"];

const MainBody = () => {
  return (
    <div className="bg-white rounded-2xl p-5 flex-1">
      
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Analytics</h3>
        <span className="bg-[#2f7d6d] text-white text-xs px-3 py-1 rounded-full">
          3 Months
        </span>
      </div>

      <div className="w-full h-45">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.analytics}>
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Bar dataKey="students" fill="#2f7d6d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.analytics}>
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#2f7d6d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {data.analytics.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-xl p-3"
          >
            <div className="w-20 h-20">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { value: item.students },
                      { value: 1000 - item.students },
                    ]}
                    dataKey="value"
                    innerRadius={28}
                    outerRadius={36}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill={COLORS[index]} />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-1 font-semibold text-sm">{item.students}</p>
            <p className="text-[11px] text-gray-500 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBody;
