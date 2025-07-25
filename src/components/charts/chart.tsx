// components/charts/EngagementBarChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,

  ResponsiveContainer,
  Legend,
} from "recharts";

const engagementData = [
  { day: "Mon", likes: 120 },
  { day: "Tue", likes: 150 },
  { day: "Wed", likes: 110 },
  { day: "Thu", likes: 200 },
  { day: "Fri", likes: 170 },
  { day: "sat", likes: 100 },
  { day: "sun", likes: 150 },
];

export const EngagementBarChart = () => (
  <div>
    <h2 className="text-lg font-semibold mb-2 text-start text-white dark:text-white p-4">
      Recent Activity
    </h2>

    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={engagementData}>
        <Legend />
        <XAxis dataKey="day" />
        <YAxis />
   
        <Bar dataKey="likes" fill="#6366f1" barSize={30} radius={[6,6,0,0]}/>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
