// components/ProfileCard.tsx
import React from 'react';

interface ProfileCardProps {
  name: string;
  field: string;
  location: string;
  lifestyle: string[];
  interests: string[];
  matchPercentage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  field,
  location,
  lifestyle,
  interests,
  matchPercentage,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-6 max-w-xl mx-auto border border-gray-200">
      {/* Match Percentage Badge */}
      <div className="flex justify-end">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {matchPercentage} Match
        </span>
      </div>

      {/* Square Profile Photo */}
      <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden relative aspect-square mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400 absolute inset-0 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.209 0 4-1.755 4-4 0-2.245-1.791-4-4-4-2.209 0-4 1.755-4 4 0 2.245 1.791 4 4 4zm0-8c-2.21 0-4 1.755-4 4 0 2.245 1.79 4 4 4 2.21 0 4-1.755 4-4 0-2.245-1.79-4-4-4z" />
        </svg>
      </div>

      {/* Profile Details */}
      <div className="mt-4">
        {/* Darker Name */}
        <h2 className="text-2xl font-bold text-black">{name}</h2>
        <p className="text-gray-600 flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m4 8l-4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {field}
        </p>
        <p className="text-gray-600 flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a8 8 0 011.414-1.414l4.243 4.242zm-4.242-4.242L4.172 5.172a4 4 0 00-5.656 5.656l4.242 4.242a4 4 0 005.656-5.656z" />
          </svg>
          {location}
        </p>
      </div>

      {/* Lifestyle Tags */}
      <div className="mt-4">
        <h3 className="text-gray-600 font-semibold">Lifestyle</h3>
        <div className="flex space-x-2 mt-2">
          {lifestyle.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interests Tags */}
      <div className="mt-4">
        <h3 className="text-gray-600 font-semibold">Interests</h3>
        <div className="flex space-x-2 mt-2">
          {interests.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;