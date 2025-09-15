import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#000319] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <p className="text-white/80 text-lg font-medium">Loading service details...</p>
      </div>
    </div>
  );
};

export default Loading;
