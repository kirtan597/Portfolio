'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative flex items-center justify-center w-16 h-8 rounded-full p-1 transition-all duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25' 
          : 'bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg shadow-blue-500/25'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          absolute w-6 h-6 rounded-full flex items-center justify-center
          ${isDark 
            ? 'bg-slate-800 text-purple-300' 
            : 'bg-white text-blue-600'
          }
        `}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </motion.div>
      </motion.div>
      
      {/* Background icons */}
      <div className="flex items-center justify-between w-full px-1">
        <Sun className={`h-3 w-3 ${isDark ? 'text-purple-300/50' : 'text-blue-600/70'}`} />
        <Moon className={`h-3 w-3 ${isDark ? 'text-purple-300/70' : 'text-blue-600/50'}`} />
      </div>
    </motion.button>
  );
}