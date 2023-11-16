import React from 'react'
import HomePage from '../components/Home/Home'
import Dir from '../components/Home/Dir'

import Accordion from '../components/Home/DefaultAccordion'
function HomeCon() {
  return (
    <div>
   <HomePage/>
   <Dir/>
   
   <Accordion className="bg-gray-50" />

    </div>
   
  )
}

export default HomeCon
