import { motion } from 'framer-motion';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent } from '../ui/card';

const AnimatedChart = ({ title, data, className = "" }) => {
  const chartData = [
    { name: 'Jan', value: 20, color: '#a8c5da' },
    { name: 'Feb', value: 35, color: '#a8c5da' },
    { name: 'Mar', value: 25, color: '#a8c5da' },
    { name: 'Apr', value: 45, color: '#a8c5da' },
    { name: 'May', value: 15, color: '#a8c5da' },
    { name: 'Jun', value: 35, color: '#a8c5da' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`${className} h-full`}
    >
      <Card className="bg-[#f7f9fb] dark:bg-gray-800 border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <motion.h3 
            className="text-sm font-semibold text-[#1c1c1c] dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {title}
          </motion.h3>
          
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#1c1c1c66' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#1c1c1c66' }}
                  tickFormatter={(value) => `${value}M`}
                />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1000}
                  animationDelay={(_, index) => index * 100}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedChart;
