import React from 'react';

import digital from '../../assets/startup/digital.png';
import lac from '../../assets/startup/lac.jpg';
import lea from '../../assets/startup/lea.png';
import loc from '../../assets/startup/loc1.jpg';
import steam from '../../assets/startup/steam.jpg';

const Startuplist = () => {
  const startups = [
    {
      name: 'Digital Fortress',
      description: 'Digital Fortress is a cybersecurity company that specializes in using biometric security software to automatically recognize people based on their behavioral or biological characteristics. They provide innovative solutions to protect data and ensure secure access to sensitive information.',
      image: digital,
      website: 'https://digitalfortress.in/',
    },
    {
      name: 'i-Leaves',
      description: 'i-Leaves is an innovative technology company focused on developing solutions to address various challenges in different sectors. They have a particular emphasis on Agriculture, Energy, and Health care. With cutting-edge technology and a team of experts, i-Leaves is transforming these sectors with sustainable and efficient solutions.',
      image: lac,
      website: '/',
    },
    {
      name: 'Spark Learning',
      description: 'Spark Learning is the concept born from the profound discussion of a few young students who firmly believe in reshaping the way of learning. They provide a platform for interactive and engaging learning experiences that cater to diverse needs and preferences of learners.',
      image: lea,
      website: '/',
    },
    {
      name: 'Locaro',
      description: 'Locaro is a hyperlocal delivery platform that allows you to buy from shops and stores near you. They are committed to making your shopping experience more convenient by providing fast and reliable delivery services within your community.',
      image: loc,
      website: '/',
    },
    {
      name: 'Packet Lab',
      description: 'Packet Lab specializes in creating home-lab kits for network professionals and enthusiasts. They offer high-quality lab kits with a wide range of networking equipment and resources to enhance your hands-on learning experience in networking and IT.',
      image: steam,
      website: '/',
    },
  ];

  return (
    <div className="m-8">
      <div className="text-center mb-8 m-24">
        <p className="text-pink-500 text-lg font-semibold mb-2">− What We do −</p>
        <p className="text-black-500 text-lg font-semibold">Our Start-up</p>
        <span className="text-neutralDGrey">
          Empowering Innovation and Entrepreneurship
        </span>
        <p> </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {startups.map((startup, index) => (
          <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-full object-center"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{startup.name}</div>
              <p className="text-gray-700 text-base">{startup.description}</p>
            </div>
            <div className="px-6 py-4">
              <button  className="bg-pink-500 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-brandPrimary">
                <a href={startup.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startuplist;
