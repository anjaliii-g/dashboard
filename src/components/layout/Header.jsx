import { motion } from 'framer-motion';
import {
  BellIcon,
  ClockIcon,
  MenuIcon,
  SearchIcon,
  SidebarIcon,
  StarIcon,
} from 'lucide-react';
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import ThemeToggle from '../common/ThemeToggle';

const Header = ({ onMenuClick }) => {
  const { isMobile } = useResponsive();

  const leftIcons = [
    { icon: MenuIcon, alt: "Menu" },
    { icon: StarIcon, alt: "Star" },
  ];

  const rightIcons = [
    { icon: ClockIcon, alt: "Clock counter" },
    { icon: BellIcon, alt: "Bell" },
    { icon: SidebarIcon, alt: "Sidebar" },
  ];

  return (
    <motion.header 
      className="flex w-full items-center justify-between px-6 py-4 bg-background border-b border-border flex-shrink-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        {/* Left Icons */}
        <div className="flex items-center gap-2">
          {leftIcons.map((iconData, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={iconData.icon === MenuIcon ? onMenuClick : undefined}
                className="p-2 h-auto hover:bg-accent transition-colors"
              >
                <iconData.icon className="w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Dashboards
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-muted-foreground/50">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground font-medium text-sm">
                Default
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <motion.div 
          className="flex items-center px-3 py-2 bg-muted rounded-lg"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <SearchIcon className="w-4 h-4 text-muted-foreground mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground border-none outline-none"
          />
          <span className="text-xs text-muted-foreground">⌘/</span>
        </motion.div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {rightIcons.map((iconData, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-auto hover:bg-accent transition-colors relative"
              >
                <iconData.icon className="w-5 h-5" />
                {iconData.icon === BellIcon && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
