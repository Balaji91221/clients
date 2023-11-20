import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Sidebar from '../components/Event/Sidebar';
import { BsPeopleFill } from 'react-icons/bs';

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch data

        const response = await fetch(`https://vtbif-express.onrender.com/blogs/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post. Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched or if there's an error
      }
    };

    fetchData();
  }, [id]);

  const { title, author, content, image, Participants, published_date } = data;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='py-36 bg-gray-200 py-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4 '>
        <h1 className='text-5xl leading-snug font-bold mb-5'>Single Event</h1>
      </div>

      <div className='max-w-7xl  my-12 flex flex-col md:flex-row gap-12 m-10'>
        <div className='lg:w-3/4 mx-auto'>
          <div><img src={image} alt="" className='mx-auto w-full rounded mb-5' /></div>
          <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />  {`Event Coordinator: ${author}`} | {published_date}</p>
          <p className='mb-6 text-gray-600'>
            <BsPeopleFill className='inline-flex items-center mr-2' />
            {`participants: ${Participants}`}
          </p>
          <p className='text-sm text-gray-500 mb-6'>{content} </p>
          <div className='text-base text-gray-500'>
            {/* Your content goes here */}
          </div>
        </div>
        <div className='lg:w-1/2'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
