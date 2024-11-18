import React from 'react';
import { Play, Clock } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  author: string;
  views: string;
  timestamp: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  thumbnail, 
  title, 
  author, 
  views, 
  timestamp,
  duration 
}) => {
  return (
    <div className="group hover-scale">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-2 glass-effect">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white filter drop-shadow-lg" fill="white" fillOpacity={0.2} />
        </div>
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-xs font-medium bg-black/80 text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
      </div>
      <div className="px-1">
        <h3 className="font-medium text-sm text-white mb-0.5 line-clamp-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
          {author}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{views} • {timestamp}</p>
      </div>
    </div>
  );
};

export default VideoCard;