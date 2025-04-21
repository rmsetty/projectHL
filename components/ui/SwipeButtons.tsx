// components/SwipeButtons.tsx
import React from 'react';

interface SwipeButtonsProps {
  onLike: () => void;
  onPass: () => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onPass }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onPass}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-full mr-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        onClick={onLike}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  );
};

export default SwipeButtons;