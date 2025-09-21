import { motion } from 'framer-motion';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent } from '../ui/card';

const RevenueChart = () => {
  const data = [
    { name: 'Jan', current: 20, previous: 15 },
    { name: 'Feb', current: 35, previous: 25 },
    { name: 'Mar', current: 25, previous: 30 },
    { name: 'Apr', current: 45, previous: 35 },
    { name: 'May', current: 30, previous: 40 },
    { name: 'Jun', current: 40, previous: 30 },
  ];

  const revenueLegend = [
    { label: "Current Week", value: "$58,211", color: "#3b82f6" },
    { label: "Previous Week", value: "$68,768", color: "#94a3b8" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="h-full"
    >
      <Card className="bg-[#f7f9fb] dark:bg-gray-800 border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <motion.h3 
              className="text-sm font-semibold text-[#1c1c1c] dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Revenue
            </motion.h3>
            
            <div className="text-sm text-muted-foreground">|</div>
            
            <div className="flex flex-wrap gap-4">
              {revenueLegend.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.label} <span className="font-semibold text-foreground">{item.value}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  tickFormatter={(value) => `${value}M`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  dataKey="previous" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#94a3b8', strokeWidth: 2, r: 4 }}
                  animationDuration={1500}
                  animationDelay={200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RevenueChart;
