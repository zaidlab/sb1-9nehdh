import React, { useState } from 'react';
import { Search, Bell, User, LogOut, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 glass-effect backdrop-blur-sm z-10 flex items-center justify-between px-8">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full bg-gray-900/30 text-white rounded-lg pl-10 pr-4 py-2.5 
                     border border-white/5 focus:outline-none focus:ring-2 
                     focus:ring-purple-500/30 focus:border-purple-500/30
                     transition-all duration-300"
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/upload')}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg 
                   bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 
                   transition-all duration-300"
        >
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="relative text-gray-400 hover:text-white transition-colors"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500/80 rounded-full"></span>
        </motion.button>

        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-full purple-gradient p-[2px]">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </div>
          </motion.button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-lg py-1"
              >
                <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 w-full">
                  <LogOut className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;