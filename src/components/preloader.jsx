import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
export default function Preloader() {
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoadingText('Almost there...');
    }, 2000); // Set the delay time in milliseconds (e.g., 2000ms for 2 seconds)

    return () => clearTimeout(delay); // Clear the timeout on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
     
     <FadeLoader color="#db2777" />
      <p className="text-gray-500">{loadingText}</p>
    </div>
  );
}
