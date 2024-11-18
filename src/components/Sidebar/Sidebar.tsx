import React from 'react';
import { Home, Play, Radio, Book, Compass, TrendingUp, FolderHeart, List } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Radio, label: 'Streams', path: '/streams' },
  { icon: Play, label: 'Videos', path: '/videos' },
  { icon: Book, label: 'Books', path: '/books' },
];

const discoveryItems = [
  { icon: Compass, label: 'Categories', path: '/categories' },
  { icon: TrendingUp, label: 'Trending', path: '/trending' },
  { icon: FolderHeart, label: 'Collections', path: '/collections' },
  { icon: List, label: 'Playlists', path: '/playlists' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 h-screen glass-effect fixed left-0 top-0 overflow-y-auto border-r border-white/5">
      <div className="p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-8"
        >
          Novaflix
        </motion.h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-gray-400 text-xs font-semibold mb-4 tracking-wider">MENU</h2>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button 
                    onClick={() => navigate(item.path)}
                    className={`flex items-center space-x-3 w-full p-2.5 rounded-lg 
                             transition-all duration-300
                             ${location.pathname === item.path 
                               ? 'bg-purple-500/20 text-purple-400' 
                               : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-400'}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-gray-400 text-xs font-semibold mb-4 tracking-wider">DISCOVERY</h2>
            <ul className="space-y-1">
              {discoveryItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + menuItems.length) * 0.1 }}
                >
                  <button 
                    onClick={() => navigate(item.path)}
                    className={`flex items-center space-x-3 w-full p-2.5 rounded-lg 
                             transition-all duration-300
                             ${location.pathname === item.path 
                               ? 'bg-purple-500/20 text-purple-400' 
                               : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-400'}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;