import { motion } from 'framer-motion';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';

const LocationRevenue = () => {
  const locationData = [
    { city: "New York", value: "72K", progress: 100, color: "bg-blue-500" },
    { city: "San Francisco", value: "39K", progress: 54, color: "bg-green-500" },
    { city: "Sydney", value: "25K", progress: 35, color: "bg-yellow-500" },
    { city: "Singapore", value: "61K", progress: 85, color: "bg-purple-500" },
  ];

  const mapPins = [
    { top: "32%", left: "11%", color: "bg-blue-500" },
    { top: "38%", left: "24%", color: "bg-green-500" },
    { top: "59%", left: "72%", color: "bg-yellow-500" },
    { top: "76%", left: "83%", color: "bg-purple-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="h-full"
    >
      <Card className="bg-[#f7f9fb] dark:bg-gray-800 border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <motion.h3 
            className="text-sm font-semibold text-[#1c1c1c] dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Revenue by Location
          </motion.h3>

          {/* World Map */}
          <div className="relative mb-6 h-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <path
                  d="M50,80 Q80,60 120,70 Q160,65 200,75 Q240,70 280,80 Q320,75 350,85 L350,120 Q320,130 280,125 Q240,130 200,120 Q160,125 120,115 Q80,120 50,110 Z"
                  fill="#a8c5da"
                  className="opacity-60"
                />
                <path
                  d="M80,100 Q100,95 130,100 Q160,98 190,105 Q220,100 250,110 L250,140 Q220,145 190,140 Q160,143 130,138 Q100,140 80,135 Z"
                  fill="#a8c5da"
                  className="opacity-40"
                />
                <path
                  d="M300,90 Q320,85 340,90 L340,115 Q320,120 300,115 Z"
                  fill="#a8c5da"
                  className="opacity-50"
                />
              </svg>
            </div>
            
            {mapPins.map((pin, index) => (
              <motion.div
                key={index}
                className={`absolute w-3 h-3 ${pin.color} rounded-full shadow-lg border-2 border-white`}
                style={{ top: pin.top, left: pin.left }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Location Data */}
          <div className="space-y-4 flex-1">
            {locationData.map((location, index) => (
              <motion.div
                key={location.city}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${location.color} rounded-full`} />
                    <span className="text-xs text-foreground">{location.city}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{location.value}</span>
                </div>
                <Progress 
                  value={location.progress} 
                  className="h-1.5 bg-muted"
                />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LocationRevenue;
