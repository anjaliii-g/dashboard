import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import AnimatedChart from '../common/AnimatedChart';
import MetricCard from '../common/MetricCard';
import LocationRevenue from './LocationRevenue';
import ProductsTable from './ProductsTable';
import RevenueChart from './RevenueChart';
import TotalSales from './TotalSales';

const DashboardContent = () => {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();

  const metricCards = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      isPositive: true,
      bgColor: "bg-[#e3f5ff] dark:bg-blue-900/20",
      textColor: "text-[#1c1c1c] dark:text-white",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      bgColor: "bg-[#f7f9fb] dark:bg-gray-800",
      textColor: "text-[#1c1c1c] dark:text-white",
      onClick: () => navigate('/orders'),
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      isPositive: true,
      bgColor: "bg-[#f7f9fb] dark:bg-gray-800",
      textColor: "text-[#1c1c1c] dark:text-white",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
      bgColor: "bg-[#e5ecf6] dark:bg-purple-900/20",
      textColor: "text-[#1c1c1c] dark:text-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 space-y-6 bg-background"
    >
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-xl font-semibold text-foreground">eCommerce</h1>
      </motion.div>

      {/* First Row: Metric Cards + Projections Chart */}
      <motion.div 
        className="flex gap-6"
        variants={containerVariants}
      >
        {/* Metric Cards - Left Half */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {metricCards.map((card, index) => (
            <MetricCard
              key={card.title}
              {...card}
              index={index}
              onClick={card.onClick}
            />
          ))}
        </div>

        {/* Projections Chart - Right Half */}
        <div className="flex-1">
          <AnimatedChart 
            title="Projections vs Actuals"
            className="h-full"
          />
        </div>
      </motion.div>

      {/* Second Row: Revenue Chart + Location Revenue */}
      <motion.div 
        className="flex gap-6"
        variants={containerVariants}
      >
        {/* Revenue Chart - Left Side (2/3) */}
        <div className="flex-[2]">
          <RevenueChart />
        </div>

        {/* Location Revenue - Right Side (1/3) */}
        <div className="flex-1">
          <LocationRevenue />
        </div>
      </motion.div>

      {/* Third Row: Products Table + Total Sales */}
      <motion.div 
        className="flex gap-6"
        variants={containerVariants}
      >
        {/* Products Table - Left Side (2/3) */}
        <div className="flex-[2]">
          <ProductsTable />
        </div>

        {/* Total Sales - Right Side (1/3) */}
        <div className="flex-1">
          <TotalSales />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardContent;
