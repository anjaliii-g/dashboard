import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CreditCardIcon,
  FolderOpenIcon,
  MessageCircleIcon,
  NotebookIcon,
  PieChartIcon,
  ShoppingBagIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react';
import React, { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { Button } from '../ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const navigationData = {
  quickNav: [
    { id: "overview", label: "Overview", icon: "dot" },
    { id: "projects", label: "Projects", icon: "dot" },
  ],
  dashboards: [
    {
      id: "default",
      label: "Default",
      icon: PieChartIcon,
      isSelected: true,
      hasSubmenu: false,
    },
    {
      id: "ecommerce",
      label: "eCommerce",
      icon: ShoppingBagIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpenIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
    {
      id: "courses",
      label: "Online Courses",
      icon: BookOpenIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
  ],
  pages: [
    {
      id: "user-profile",
      label: "User Profile",
      icon: UserIcon,
      hasSubmenu: true,
      isExpanded: true,
      subItems: [
        { id: "profile-overview", label: "Overview" },
        { id: "profile-projects", label: "Projects" },
        { id: "profile-campaigns", label: "Campaigns" },
        { id: "profile-documents", label: "Documents" },
        { id: "profile-followers", label: "Followers" },
      ],
    },
    {
      id: "account",
      label: "Account",
      icon: CreditCardIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
    {
      id: "corporate",
      label: "Corporate",
      icon: UsersIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
    {
      id: "blog",
      label: "Blog",
      icon: NotebookIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
    {
      id: "social",
      label: "Social",
      icon: MessageCircleIcon,
      hasSubmenu: true,
      isExpanded: false,
    },
  ],
};

const Sidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("favorites");
  const [expandedItems, setExpandedItems] = useState({
    "user-profile": true,
  });
  const { isMobile } = useResponsive();

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: isMobile ? "-100%" : 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className={`
          fixed lg:relative top-0 left-0 z-50 lg:z-auto
          w-56 lg:w-full h-full
          flex flex-col items-start gap-3 px-4 py-5
          bg-white dark:bg-gray-900 
          border-r border-border
          shadow-lg lg:shadow-none
          ${isMobile ? 'min-w-[220px]' : 'w-full'}
        `}
      >
        {/* Logo Section */}
        <motion.div 
          className="flex items-center gap-2 p-1 w-full rounded-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
          <span className="font-medium text-foreground">
            ByeWind
          </span>
        </motion.div>

        {/* Favorites/Recently Toggle */}
        <motion.div 
          className="flex flex-col items-start gap-1 w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="flex items-center gap-2 w-full">
            <Button
              variant="ghost"
              size="sm"
              className={`h-auto px-2 py-1 text-sm transition-colors ${
                activeTab === "favorites" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("favorites")}
            >
              Favorites
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-auto px-2 py-1 text-sm transition-colors ${
                activeTab === "recently" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("recently")}
            >
              Recently
            </Button>
          </div>

          {/* Quick Navigation */}
          {navigationData.quickNav.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index + 2}
            >
              <Button
                variant="ghost"
                className="w-full justify-start gap-1 px-2 py-1 h-auto text-foreground hover:bg-accent transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-muted" />
                {item.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboards Section */}
        <motion.div 
          className="flex flex-col items-start gap-1 w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <div className="px-3 py-1 w-full">
            <span className="text-sm text-muted-foreground">
              Dashboards
            </span>
          </div>

          {navigationData.dashboards.map((item, index) => {
            const IconComponent = item.icon;
            const isExpanded = expandedItems[item.id];

            return (
              <motion.div 
                key={item.id} 
                className="w-full"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index + 5}
              >
                {item.hasSubmenu ? (
                  <Collapsible
                    open={isExpanded}
                    onOpenChange={() => toggleExpanded(item.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start gap-1 px-0 pr-2 py-1 h-auto hover:bg-accent transition-colors ${
                          item.isSelected ? "bg-accent" : ""
                        }`}
                      >
                        <div className="flex items-center gap-0">
                          {item.isSelected && (
                            <div className="w-5 h-5 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                          )}
                          {!item.isSelected && (
                            <div className="w-5 h-5 flex items-center justify-center">
                              <motion.div
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRightIcon className="w-4 h-4" />
                              </motion.div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 flex-1">
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm">
                            {item.label}
                          </span>
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {/* Submenu content would go here */}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-1 px-0 pr-2 py-1 h-auto hover:bg-accent transition-colors ${
                      item.isSelected ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex items-center gap-0">
                      {item.isSelected && (
                        <div className="w-5 h-5 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 flex-1">
                      <IconComponent className="w-5 h-5" />
                      <span className="text-sm">
                        {item.label}
                      </span>
                    </div>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pages Section */}
        <motion.div 
          className="flex flex-col items-start gap-1 w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={9}
        >
          <div className="px-3 py-1 w-full">
            <span className="text-sm text-muted-foreground">
              Pages
            </span>
          </div>

          {navigationData.pages.map((item, index) => {
            const IconComponent = item.icon;
            const isExpanded = expandedItems[item.id];

            return (
              <motion.div 
                key={item.id} 
                className="w-full"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index + 10}
              >
                <Collapsible
                  open={isExpanded}
                  onOpenChange={() => toggleExpanded(item.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-1 px-0 pr-2 py-1 h-auto hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-0">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRightIcon className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm">
                          {item.label}
                        </span>
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <AnimatePresence>
                    {isExpanded && (
                      <CollapsibleContent className="pl-6">
                        {item.subItems?.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-start px-2 py-1 h-auto text-foreground hover:bg-accent transition-colors"
                            >
                              {subItem.label}
                            </Button>
                          </motion.div>
                        ))}
                      </CollapsibleContent>
                    )}
                  </AnimatePresence>
                </Collapsible>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
