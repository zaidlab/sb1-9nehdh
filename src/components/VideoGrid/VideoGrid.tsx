import React from 'react';
import VideoCard from './VideoCard';

const videos = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Complete Web Development Guide 2024',
    author: 'TechMaster Pro',
    views: '125K views',
    timestamp: '2 days ago',
    duration: '12:45'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    title: 'Advanced Machine Learning Concepts Explained',
    author: 'AI Academy',
    views: '89K views',
    timestamp: '1 week ago',
    duration: '18:30'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    title: 'Gaming Setup Tour 2024 - Ultimate Edition',
    author: 'Tech Reviews',
    views: '250K views',
    timestamp: '3 days ago',
    duration: '21:15'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    title: 'Learn Python in 60 Minutes - Complete Tutorial',
    author: 'Code Masters',
    views: '180K views',
    timestamp: '5 days ago',
    duration: '58:20'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    title: 'Cybersecurity Essentials for Beginners',
    author: 'Security Hub',
    views: '95K views',
    timestamp: '1 day ago',
    duration: '15:30'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
    title: 'Music Production Masterclass',
    author: 'Studio Pro',
    views: '75K views',
    timestamp: '4 days ago',
    duration: '42:15'
  }
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;