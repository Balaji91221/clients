import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoadingText('Almost there...');
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FadeLoader color="#db2777" />
      <p className="text-gray-500">{loadingText}</p>
    </div>
  );
};

export default Loader;
