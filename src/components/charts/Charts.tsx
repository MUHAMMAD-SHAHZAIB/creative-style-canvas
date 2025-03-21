
import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Data for bar chart
const barData = [
  { name: 'Mon', value: 15 },
  { name: 'Tue', value: 20 },
  { name: 'Wed', value: 18 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 16 },
];

// Data for line chart
const lineData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 28 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 32 },
  { name: 'May', value: 38 },
  { name: 'Jun', value: 30 },
  { name: 'Jul', value: 35 },
];

// Data for pie chart
const pieData = [
  { name: 'Total Absent', value: 38.6, color: '#ff5c75' },
  { name: 'Missing In', value: 22.9, color: '#1eb980' },
  { name: 'Missing Out', value: 30.8, color: '#3d7cf9' },
  { name: 'Incomplete Days', value: 8.1, color: '#ff8c29' },
];

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-forcepro-green">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

// Bar Chart Component
export const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={barData}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <YAxis 
          hide={true}
          domain={[0, 'dataMax + 5']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="value" 
          fill="#1eb980" 
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

// Line Chart Component
export const LineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={lineData}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <YAxis 
          hide={true}
          domain={[0, 'dataMax + 10']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3d7cf9"
          strokeWidth={2}
          dot={{ r: 3, fill: "#3d7cf9", strokeWidth: 0 }}
          activeDot={{ r: 5, fill: "#3d7cf9", strokeWidth: 0 }}
          animationDuration={1500}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

// Pie Chart Component
export const PieChart = () => {
  return (
    <div className="h-24 flex items-center justify-center mb-1">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
            paddingAngle={2}
            dataKey="value"
            animationDuration={1500}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      
      <div className="text-xs space-y-1">
        {pieData.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span>{entry.name}</span>
            <span className="font-medium">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
