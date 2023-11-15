import React from 'react';
import banner1 from '../../assets/Home/banner1.jpg';
import banner2 from '../../assets/Home/banner2.jpg';
import banner3 from '../../assets/Home/banner3.jpg';
import { Carousel } from 'flowbite-react';

function Home() {
  const carouselItems = [
    {
      imgSrc: banner3,
      quote: "VIT-AP TECHNOLOGY BUSINESS INCUBATION FOUNDATION",
      para: "The Art of turning an idea into a thriving reality.",
    },
    {
      imgSrc: banner2,
      quote: "Innovation",
      para: "where passion meets persistence in the pursuit of success.",
    },
    {
      imgSrc: banner1,
      quote: "Dream Of Entrepreneurship",
      para: "Entrepreneurship is not just a career choice, it's a way of life.",
    },
  ];

  return (
    <div className='bg-neutralSilver min-h-screen flex items-center' id='home'>
      <div className='w-full'>
        <Carousel className='w-full h-screen lg:max-h-screen'>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className='my-8 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12 relative' // Added relative positioning
              style={{ height: '70%', position: 'relative' }} // Adjust the height as needed
            >
              <div className='absolute bottom-0 left-0 p-4 w-full text-center'>
                <p className='lg:text-2xl sm:text font-bold mb-2 md:text-white sm:text-black'>{item.quote}</p>
                <p className='text-sm md:text-white sm:text-black'>{item.para}</p>
              </div>
              <div>
                <img
                  src={item.imgSrc}
                  alt=''
                  style={{ height: '100%', width: '100%' }}
                  className='w-full object-cover'
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
