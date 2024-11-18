import React from 'react';
import { Users, Play } from 'lucide-react';

const streams = [
  {
    title: "Late Night Coding Session - Building a Game Engine",
    streamer: "TechWizard",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    viewers: "12.5K",
    tags: ["Programming", "C++", "GameDev"]
  },
  {
    title: "Piano Practice & Chill Music",
    streamer: "MusicMaster",
    thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
    viewers: "8.2K",
    tags: ["Music", "Piano", "Classical"]
  },
  {
    title: "Digital Art Creation - Character Design",
    streamer: "ArtistPro",
    thumbnail: "https://images.unsplash.com/photo-1619410283995-43d9134e7656",
    viewers: "5.7K",
    tags: ["Art", "Digital", "Design"]
  },
  {
    title: "Digital Art Creation - Character Design",
    streamer: "ArtistPro",
    thumbnail: "https://images.unsplash.com/photo-1619410283995-43d9134e7656",
    viewers: "5.7K",
    tags: ["Art", "Digital", "Design"]
  }
];

const TopStreams = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {streams.map((stream, index) => (
        <div 
          key={index} 
          className="glass-effect rounded-lg overflow-hidden hover-scale group"
        >
          <div className="relative aspect-video">
            <img
              src={stream.thumbnail}
              alt={stream.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 text-white filter drop-shadow-lg" fill="white" fillOpacity={0.2} />
            </div>
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-xs font-medium bg-red-500/80 text-white flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </div>
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-xs font-medium bg-black/80 text-white flex items-center gap-1">
              <Users className="w-3 h-3" />
              {stream.viewers}
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
              {stream.title}
            </h3>
            <p className="text-xs text-gray-400 mb-2">{stream.streamer}</p>
            <div className="flex gap-1.5 flex-wrap">
              {stream.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-1.5 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStreams;