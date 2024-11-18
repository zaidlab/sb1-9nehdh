import React from 'react';
import { User } from 'lucide-react';

const channels = [
  {
    name: "TechWizard",
    category: "Programming",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    isLive: true,
    viewers: "12.5K"
  },
  {
    name: "MusicMaster",
    category: "Music",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    isLive: true,
    viewers: "8.2K"
  },
  {
    name: "ArtistPro",
    category: "Art",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    isLive: true,
    viewers: "5.7K"
  },
  {
    name: "GameMaster",
    category: "Gaming",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    isLive: false,
    lastSeen: "2h ago"
  },
  {
    name: "TechTalks",
    category: "Technology",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    isLive: false,
    lastSeen: "5h ago"
  }
];

const RecommendedChannels = () => {
  return (
    <div className="glass-effect rounded-lg p-3">
      <h2 className="text-base font-semibold mb-3">Recommended Channels</h2>
      <div className="space-y-2">
        {channels.map((channel, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-purple-500/10 
                     transition-all duration-300 cursor-pointer group"
          >
            <div className="relative">
              {channel.avatar ? (
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-purple-400" />
                </div>
              )}
              {channel.isLive && (
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-gray-900" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-gray-200 truncate group-hover:text-purple-400">
                {channel.name}
              </h3>
              <p className="text-xs text-gray-400 truncate">
                {channel.category}
              </p>
            </div>
            <div className="text-right">
              {channel.isLive ? (
                <span className="text-xs font-medium text-gray-400">
                  {channel.viewers}
                </span>
              ) : (
                <span className="text-xs text-gray-500">
                  {channel.lastSeen}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedChannels;