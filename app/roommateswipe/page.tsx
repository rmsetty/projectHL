// pages/index.tsx
"use client";

import Head from 'next/head';
import ProfileCard from "@/components/ui/ProfileCard";
import SwipeButtons from "@/components/ui/SwipeButtons";
import ProgressBar from "@/components/ui/ProgressBar";
import { useState, useEffect } from 'react';
import { ArrowLeft, Router } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Home() {

  const router = useRouter();
  // State to track the current profile index and total profiles
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const totalProfiles: number = 3;

  // Sample data for the profile
  const sampleProfile = {
    name: 'Michael Park',
    field: 'Business Analytics, Senior',
    location: 'Northside',
    lifestyle: ['Night Owl', 'Organized', 'Social'],
    interests: ['Gaming', 'Fitness', 'Music'],
    matchPercentage: '88%',
  };

  // Function to handle liking a profile
  const handleLike = () => {
    console.log('Liked!');
    
    setCurrentProfileIndex((prev) => Math.min(prev + 1, totalProfiles - 1));
    
  };

  // Function to handle passing a profile
  const handlePass = () => {
    console.log('Passed!');
    
    setCurrentProfileIndex((prev) => Math.max(prev - 1, -1));
  };

  // Ensure the component only updates after hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Find Roommates</title>
      </Head>
      {/* White Background */}
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
        {/* Main Content Container */}
        <div className="max-w-xl w-full mx-auto">
          {/* Title and Subtitle */}
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Find Roommates</h1>
          <p className="text-gray-700 text-lg mb-6">
            Swipe right if interested, left to pass
          </p>

          {/* Progress Bar */}
          {isClient && <ProgressBar current={currentProfileIndex + 1} total={totalProfiles} />}

          {/* Profile Card */}
          {isClient && (
            <ProfileCard
              name={sampleProfile.name}
              field={sampleProfile.field}
              location={sampleProfile.location}
              lifestyle={sampleProfile.lifestyle}
              interests={sampleProfile.interests}
              matchPercentage={sampleProfile.matchPercentage}
            />
          )}

          {/* Swipe Buttons */}
          {isClient && <SwipeButtons onLike={handleLike} onPass={handlePass} />}

          {/* Match Counter */}
          {isClient && (
            <p className="text-gray-600 mt-6 text-lg text-center">
              {currentProfileIndex + 1} of {totalProfiles} potential matches
            </p>
          )}

          <div className='absolute top-6 left-6'>
             <button onClick={() => router.back()} className='flex items-center text-blue-600 hover:text-blue-800'>
                <ArrowLeft size={24} className='mr-1'/>
                <span className='text-base font-medium'>Back</span>
             </button>
          </div>
        </div>
      </div>
    </>
  );
}