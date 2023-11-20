import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Change this line
import { FaUser } from 'react-icons/fa';
import Sidebar from '../components/Event/Sidebar';
import { BsPeopleFill } from 'react-icons/bs';
import Loader from '../components/Loader';

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Change this line
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://eventpage-z3n0.onrender.com/EventPage/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post. Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const { title, author, content, image, Participants, published_date } = data;

  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) {
    return (
      <div className='text-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className='py-36 bg-gray-200 py-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4 '>
        <h1 className='text-5xl leading-snug font-bold mb-5'>Single Event</h1>
      </div>

      <div className='max-w-7xl my-12 flex flex-col md:flex-row gap-12 m-10'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='mx-auto w-full rounded mb-5' />
          </div>
          <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'>
            <FaUser className='inline-flex items-center mr-2' /> {`Event Coordinator: ${author}`} | {published_date}
          </p>
          <p className='mb-6 text-gray-600'>
            <BsPeopleFill className='inline-flex items-center mr-2' />
            {`participants: ${Participants}`}
          </p>
          <p className='text-sm text-gray-500 mb-6'>{content} </p>
          <div className='text-base text-gray-500'>{/* Your content goes here */}</div>
        </div>
        <div className='lg:w-1/2'>
          <Sidebar />
        </div>
      </div>

      <button onClick={handleBackButtonClick} className='bg-blue-500 m-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Back
      </button>
    </div>
  );
};

export default SinglePage;
