import React from 'react';
import StreamCategories from './StreamCategories';
import TopStreams from './TopStreams';
import RecommendedChannels from './RecommendedChannels';

const StreamsPage = () => {
  return (
    <div className="pt-20 px-8">
      <StreamCategories />
      <div className="flex gap-4">
        <div className="flex-1">
          <TopStreams />
        </div>
        <div className="w-72 hidden xl:block">
          <RecommendedChannels />
        </div>
      </div>
    </div>
  );
};

export default StreamsPage;
