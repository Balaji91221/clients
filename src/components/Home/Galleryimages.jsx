import React from 'react';
import Carousel from 'react-grid-carousel';

const GalleryImages = () => {
  const images = [
    {
      id: 1,
      url: 'src/assets/Gallery/i1.jpg',
    },
    {
id: 26,
url: 'src/assets/Gallery/akash.jpg',
    },
    {
      id: 2,
      url: 'src/assets/Gallery/i2.jpg',
    },
    
    {
      id: 3,
      url: 'src/assets/Gallery/i3.jpg',
    },
    {
      id: 4,
      url: 'src/assets/Gallery/i4.jpg',
    },
    {
      id: 5,
      url: 'src/assets/Gallery/i5.jpg',
    },
    {
      id: 6,
      url: 'src/assets/Gallery/v-4.png',
    },
    {
      id: 7,
      url: 'src/assets/Gallery/v-10.png',
    },
    {
      id: 8,
      url: 'src/assets/Gallery/v-6.jpg',
    },
    {
      id: 9,
      url: 'src/assets/Gallery/v-7.png',
    },
    {
      id: 10,
      url: 'src/assets/Gallery/v-9.png',
    },
    {
      id: 11,
      url: 'src/assets/Gallery/v-15.png',
    },
    {
      id: 12,
      url: 'src/assets/Gallery/v-16.png',
    },
    {
      id: 13,
      url: 'src/assets/Gallery/v-18.png',
    },
    {
      id: 14,
      url: 'src/assets/Gallery/v-19.png',
    },
    {
      id: 15,
      url: 'src/assets/Gallery/v-20.png',
    },
    {
      id: 16,
      url: 'src/assets/Gallery/v-21.png',
    },
    {
      id: 17,
      url: 'src/assets/Gallery/v-24.png',
    }
    ,{
      id: 18,
      url: 'src/assets/Gallery/v-25.png',
    },{
      id: 19,
      url: 'src/assets/Gallery/v-26.png',
    },
    {
      id: 20,
      url: 'src/assets/Gallery/v-30.png',
    },
    {
      id: 21,
      url: 'src/assets/Gallery/v-31.png',
    },{
      id: 22,
      url: 'src/assets/Gallery/v-32.png',
    },{
        id: 23,
        url: 'src/assets/Gallery/v-36.png',
    },
    {
      id: 24,
      url: 'src/assets/Gallery/v-35.png',
    },{
      id: 25,
      url: 'src/assets/Gallery/v-39.png',
    },{
      id: 27,
      url: 'src/assets/Gallery/v-38.png',
    },{
      id: 28,
      url: 'src/assets/Gallery/v-40.png',
    }
  ];

  return (
    <div className='m-20'>
      <div>
        <p className='text-pink-500 text-center text-lg font-semibold mb-2'>
          − Our Gallery −
        </p>
        <p className='text-black-500 text-lg text-center font-semibold m-2'>
          A Hub for Creative Ideas: IIEC Center Gallery
        </p>
      </div>
      <Carousel cols={4} rows={1} gap={10} loop className='m-2'>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              src={image.url}
              
              className='rounded'
              alt='profile-picture'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryImages;
