import { motion, AnimatePresence } from 'framer-motion';
import { BugIcon, RadioIcon, UserIcon, XIcon } from 'lucide-react';
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const NotificationsSidebar = ({ isOpen, onClose }) => {
  const { isMobile } = useResponsive();

  const notifications = [
    {
      icon: "bug",
      iconBg: "bg-[#e3f5ff] dark:bg-blue-900/20",
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      icon: "user",
      iconBg: "bg-[#e5ecf6] dark:bg-purple-900/20",
      message: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: "bug",
      iconBg: "bg-[#e3f5ff] dark:bg-blue-900/20",
      message: "You have a bug that needs to be fixed.",
      time: "12 hours ago",
    },
    {
      icon: "broadcast",
      iconBg: "bg-[#e5ecf6] dark:bg-purple-900/20",
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/3d05.png",
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/female05.png",
      message: "Released a new version",
      time: "59 minutes ago",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/3d08.png",
      message: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/male07.png",
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/male11.png",
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/female15.png",
      name: "Natali Craig",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/male08.png",
      name: "Drew Cano",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/male06.png",
      name: "Orlando Diggs",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/female08.png",
      name: "Andi Lane",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/female09.png",
      name: "Kate Morrison",
    },
    {
      avatar: "https://c.animaapp.com/mftmwrnherbADc/img/3d03.png",
      name: "Koray Okumus",
    },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "bug":
        return <BugIcon className="w-4 h-4" />;
      case "user":
        return <UserIcon className="w-4 h-4" />;
      case "broadcast":
        return <RadioIcon className="w-4 h-4" />;
      default:
        return <RadioIcon className="w-4 h-4" />;
    }
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
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
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

      <motion.aside
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className={`
          fixed lg:relative top-0 right-0 z-50 lg:z-auto
          w-72 lg:w-full h-full
          flex flex-col items-start gap-5 p-4
          bg-background border-l border-border
          shadow-lg lg:shadow-none
          ${isMobile ? 'min-w-[280px]' : 'w-full'}
        `}
      >
        {/* Close Button for Mobile */}
        {isMobile && (
          <div className="flex justify-end w-full lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-1 h-auto"
            >
              <XIcon className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Notifications Section */}
        <motion.section 
          className="flex flex-col items-start gap-2 w-full flex-shrink-0"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <header className="px-1 py-1 w-full">
            <h2 className="text-sm font-semibold text-foreground">
              Notifications
            </h2>
          </header>

          {notifications.map((notification, index) => (
            <motion.div
              key={`notification-${index}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              className="w-full"
            >
              <Card className="w-full border-0 shadow-none bg-transparent hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="p-2 flex items-start gap-2">
                  <div className={`p-1 ${notification.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {renderIcon(notification.icon)}
                  </div>

                  <div className="flex-1 space-y-1 min-w-0">
                    <p className="text-xs text-foreground leading-tight">
                      {notification.message}
                    </p>
                    <time className="text-xs text-muted-foreground">
                      {notification.time}
                    </time>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Activities Section */}
        <motion.section 
          className="flex flex-col items-start gap-2 w-full flex-shrink-0"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <header className="px-1 py-1 w-full">
            <h2 className="text-sm font-semibold text-foreground">
              Activities
            </h2>
          </header>

          <div className="relative w-full">
            {activities.map((activity, index) => (
              <motion.div
                key={`activity-${index}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index + 6}
                className="relative w-full"
              >
                <Card className="w-full border-0 shadow-none bg-transparent hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-2 flex items-start gap-2">
                    <Avatar className="w-5 h-5 flex-shrink-0">
                      <AvatarImage src={activity.avatar} alt="User avatar" />
                      <AvatarFallback className="w-5 h-5 text-xs">U</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-1 min-w-0">
                      <p className="text-xs text-foreground leading-tight">
                        {activity.message}
                      </p>
                      <time className="text-xs text-muted-foreground">
                        {activity.time}
                      </time>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline connector */}
                {index < activities.length - 1 && (
                  <div className="absolute left-3 top-8 w-px h-6 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contacts Section */}
        <motion.section 
          className="flex flex-col items-start gap-2 w-full flex-shrink-0"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={11}
        >
          <header className="px-1 py-1 w-full">
            <h2 className="text-sm font-semibold text-foreground">
              Contacts
            </h2>
          </header>

          {contacts.map((contact, index) => (
            <motion.div
              key={`contact-${index}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index + 12}
              className="w-full"
            >
              <Card className="w-full border-0 shadow-none bg-transparent hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="p-2 flex items-center gap-2">
                  <Avatar className="w-5 h-5 flex-shrink-0">
                    <AvatarImage
                      src={contact.avatar}
                      alt={`${contact.name} avatar`}
                    />
                    <AvatarFallback className="w-5 h-5 text-xs">
                      {contact.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <p className="text-xs text-foreground truncate">
                    {contact.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>
      </motion.aside>
    </>
  );
};

export default NotificationsSidebar;
