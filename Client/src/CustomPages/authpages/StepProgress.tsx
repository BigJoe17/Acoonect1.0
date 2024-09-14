// components/StepProgress.tsx
import React from 'react';

interface StepProgressProps {
  step: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ step }) => {
  return (
    <div className="relative flex justify-between items-center mb-6">
      <div className={`h-2 w-1/3 rounded-full ${step >= 1 ? 'bg-gradient-to-r from-pink-500 to-yellow-500' : 'bg-gray-200'} transition-all duration-300`}></div>
      <div className={`h-2 w-1/3 rounded-full ${step >= 2 ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gray-200'} transition-all duration-300`}></div>
      <div className={`h-2 w-1/3 rounded-full ${step >= 3 ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-gray-200'} transition-all duration-300`}></div>
    </div>
  );
};

export default StepProgress;
