import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/Themecontext";
import { Button } from "../ui/button";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="relative h-9 w-9 rounded-lg hover:bg-accent transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <SunIcon className="h-4 w-4" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -180,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <MoonIcon className="h-4 w-4" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
