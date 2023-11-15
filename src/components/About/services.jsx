import React from "react";
import { ImEye } from "react-icons/im"; // Import the icon
import {BsFlagFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'

import banner from "../../assets/logo.png";

function Card() {
  return (
    <div>
      {/*  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 py-8 bg-white">
        <div className="text-center mb-8">
          <p className="text-pink-500 text-lg font-semibold mb-2">
            − About Us −
          </p>
          <p className="text-black-500 text-lg font-semibold ">Why You Should Join VTBIF Incubation Center Innovate & Ignite</p>
        </div>

        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center m-4 gap-12">
          <div className="md:w-3/5 mx-auto  ">
            <h2 className="text-4xl text-neutralDGrey  font-semibold mb-4 md-4/5">
              VTBIF
            </h2>
            <p className="md:3/4 text-sm text-neutralDGrey  mb-8">
              VITAP University had established Innovation Incubation
              Entrepreneurship Cell (IIEC), to provide mentorship, training, and
              resources to help students and faculty turn their innovative ideas
              into commercial products.VIT-AP Technology Business Incubation
              Foundation (VTBIF), incubation centre was established in the year
              2023. VTBIF is incorporated as a Section-8 Company under the
              Ministry of Corporate Affairs (MCA). At VTBIF, we believe that
              entrepreneurship is the key to unlocking innovation and driving
              progress. VTBIF assists faculty and students in their
              technology-based and knowledge-driven startups, and currently many
              product prototypes are supported at the centre.
            </p>
          </div>
          <div>
            <img src={banner} alt="" className="h-80 rounded-md" />
          </div>
        </div>
      </div>

      <div className="m-20">
        <div className="text-center justify-center  items-center h-full">
          <p className="text-pink-500 text-lg font-semibold  m-2">
            − Our Services −
          </p>
          <p className="text-black-500 text-lg font-semibold m-2">
            We Provide Best Services
          </p>
          <span className=" text-neutralDGrey">
            Empowering Innovation and Entrepreneurship
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 ">
        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-4 bg-white">
          <div className="flex items-center justify-center h-16 w-16 rounded hover:bg-pink-500 bg-blue-500 mx-auto mt-4">
            <ImEye className="text-white text-3xl" />{" "}
            {/* Render the centered and squared icon */}
          </div>
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2 text-center ">Vision</div>
            <p className="text-gray-700 text-base">
              A nurturing platform that supports new age tech entrepreneurs to
              transform their innovative ideas to successful business ventures
              and improve economic prospects of our nation .
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-4 bg-white">
          <div className="flex items-center justify-center h-16 w-16 rounded hover:bg-pink-500 bg-blue-500 mx-auto mt-4">
            <BsFlagFill className="text-white text-3xl" />{" "}
            {/* Render the centered and squared icon */}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Mission</div>
            <p className="text-gray-700 text-base">
              We empower students and faculty with training, mentoring, and
              funding to foster entrepreneurship. Through pioneering solutions,
              we address societal needs, promote self-reliance, and cultivate
              job creators for economic growth.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-4 bg-white">
          <div className="flex items-center justify-center h-16 w-16 rounded hover:bg-pink-500 bg-blue-500 mx-auto mt-4">
            <FaBook className="text-white text-3xl" />{" "}
            {/* Render the centered and squared icon */}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Guiding Principle
            </div>
            <p className="text-gray-700 text-base">
              At VTBIF, our vision is clear - to ignite innovation and
              entrepreneurship. Established by VITAP University, we provide
              mentorship, training, and resources to turn ideas into commercial
              products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
