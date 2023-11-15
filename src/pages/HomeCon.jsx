import React from 'react'
import HomePage from '../components/Home/Home'
import Dir from '../components/Home/dir'
import Galleryimages from '../components/Home/Galleryimages'
import Accordion from '../components/Home/accorditin'
function HomeCon() {
  return (
    <div>
   <HomePage/>
   <Dir/>
   <Galleryimages />
   <Accordion className="bg-gray-50" />

    </div>
   
  )
}

export default HomeCon
