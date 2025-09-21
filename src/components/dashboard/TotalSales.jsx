import { motion } from 'framer-motion';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent } from '../ui/card';

const TotalSales = () => {
  const salesData = [
    { name: 'Direct', value: 300.56, color: '#95a4fc' },
    { name: 'Affiliate', value: 135.18, color: '#baedbd' },
    { name: 'Sponsored', value: 154.02, color: '#b1e5fc' },
    { name: 'E-mail', value: 48.96, color: '#a8c5da' },
  ];

  const total = salesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="h-full"
    >
      <Card className="bg-[#f7f9fb] dark:bg-gray-800 border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <motion.h3 
            className="text-sm font-semibold text-[#1c1c1c] dark:text-white mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Total Sales
          </motion.h3>

          <div className="relative mb-6 flex-1 flex items-center justify-center">
            <div className="h-32 w-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={1000}
                    animationDelay={1200}
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${value.toFixed(2)}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">
                  ${total.toFixed(0)}
                </div>
                <div className="text-xs text-muted-foreground">Total</div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-3">
            {salesData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-foreground">{item.name}</span>
                </div>
                <span className="text-xs font-medium text-foreground">
                  ${item.value.toFixed(2)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            className="absolute top-20 left-12 bg-black/80 text-white px-2 py-1 rounded-lg text-xs backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            38.6%
          </motion.div> */}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TotalSales;
