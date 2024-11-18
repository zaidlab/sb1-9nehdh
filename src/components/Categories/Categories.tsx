import React from 'react';

const categories = [
  'All', 'Gaming', 'Music', 'Development', 'Design', 'AI & ML', 
  'Photography', 'Animation', '3D Modeling', 'Education'
];

const Categories = () => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-3 pb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${index === 0 
                ? 'purple-gradient text-white shadow-lg shadow-purple-500/10' 
                : 'glass-effect hover:bg-purple-500/10 hover:border-purple-400/20'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;