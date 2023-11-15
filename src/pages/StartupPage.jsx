import React from 'react';
import Startup from '../components/Startup/Startup';
import StartupList from '../components/Startup/Startuplist'; // Make sure the component name matches the actual export name

const StartupPage = () => {
  return (
    <div className='bg-gray-50'>
      <Startup />
      <StartupList />
    </div>
  );
}

export default StartupPage;
