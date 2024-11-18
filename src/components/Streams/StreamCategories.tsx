import React from 'react';
import { Gamepad2, Music2, Code2, Palette, Laptop2, Heart, Mic2, Users } from 'lucide-react';

const categories = [
  { icon: Gamepad2, name: 'Gaming', viewers: '850K' },
  { icon: Music2, name: 'Music', viewers: '320K' },
  { icon: Code2, name: 'Programming', viewers: '150K' },
  { icon: Palette, name: 'Creative', viewers: '95K' },
  { icon: Laptop2, name: 'Technology', viewers: '88K' },
  { icon: Heart, name: 'IRL', viewers: '220K' },
  { icon: Mic2, name: 'Podcasts', viewers: '75K' },
  { icon: Users, name: 'Co-Working', viewers: '45K' },
];

const StreamCategories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category.name}
          className="glass-effect p-3 rounded-lg hover:bg-purple-500/10 
                   transition-all duration-300 group text-left"
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 
                          group-hover:bg-purple-500/20">
              <category.icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-200 group-hover:text-purple-400 line-clamp-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-400">{category.viewers}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default StreamCategories;