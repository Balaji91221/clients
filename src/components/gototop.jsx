import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function GoToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-md shadow-md transition-opacity duration-500 ease-in-out hover:bg-pink-500 transform hover:scale-105"
          onClick={scrollToTop}
        >
          <FiArrowUp size={32} />
        </button>
      )}
    </div>
  );
}

export default GoToTopButton;
