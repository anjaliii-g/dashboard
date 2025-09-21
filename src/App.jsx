import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardContent from './components/dashboard/DashboardContent';
import Header from './components/layout/Header';
import NotificationsSidebar from './components/layout/NotificationsSidebar';
import Sidebar from './components/layout/Sidebar';
import { ThemeProvider } from './context/ThemeContext';
import { useResponsive } from './hooks/useResponsive';
import { OrdersListLight } from './routes/OrdersListLight/OrdersList';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { isMobile, isDesktop } = useResponsive();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-y-auto">
     
      <div className={`${isDesktop ? 'w-56' : 'w-0'} flex-shrink-0 relative`}>
        <Sidebar 
          isOpen={isDesktop || sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
      </div>

     
      <div className="flex-1 flex flex-col min-w-0">
        
        <Header onMenuClick={toggleSidebar} />

       
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DashboardContent />
        </motion.div>
      </div>

      {/* Right Notifications Sidebar - Reduced width */}
      <div className={`${isDesktop ? 'w-72' : 'w-0'} flex-shrink-0 relative`}>
        <NotificationsSidebar 
          isOpen={isDesktop || notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
        />
      </div>
    </div>
  );
};

const AppContent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/orders" element={<OrdersListLight />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
