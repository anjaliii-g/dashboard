import { motion } from 'framer-motion';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '../ui/card';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  bgColor, 
  textColor,
  index = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="w-full"
    >
      <Card 
        className={`${bgColor} border-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full`}
        onClick={onClick}
      >
        <CardContent className="p-6">
          <motion.div 
            className="space-y-3"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-semibold ${textColor} group-hover:opacity-80 transition-opacity`}>
                {title}
              </h3>
            </div>
            
            <div className="flex items-end justify-between">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <p className={`text-2xl font-semibold ${textColor}`}>
                  {value}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className={`text-xs ${textColor} opacity-70`}>
                  {change}
                </span>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {isPositive ? (
                    <TrendingUpIcon className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDownIcon className="w-4 h-4 text-red-500" />
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCard;
