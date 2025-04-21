// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full overflow-hidden mb-4">
      <div
        className="bg-blue-500 h-2"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;