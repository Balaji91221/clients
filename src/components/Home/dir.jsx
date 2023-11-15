import React from "react";
import banner from "../../assets/Home/ameet.jpeg";
import { Link } from "react-router-dom";

function Dir() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 py-8 bg-white">
      <div className="text-center mb-8">
        <p className="text-pink-500 text-lg font-semibold mb-2">− What We Provide −</p>
        <p className="text-black-500 text-lg font-semibold">Our Commitment</p>
      </div>

      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={banner} alt="" className="h-80 rounded-md" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md-4/5">
            Innovation Incubation Entrepreneurship Cell (IIEC)
          </h2>
          <p className="md:3/4 text-sm text-neutralDGrey mb-8">
            Welcome to VITAP Technology Business Incubation Foundation (VTBIF),
            a thriving innovation hub committed to nurturing cutting-edge
            startups. We empower visionaries to accelerate their growth by
            boosting their preparedness in technology, manufacturability, and
            investment appeal.
          </p>
          <p className="md:3/4 text-sm text-neutralDGray font-semibold ">Dr. Ameet Chavan</p>
          <p className="md:3/4 text-sm text-neutralDGrey mb-8">Director, VIT-AP university IIEC</p>
          <div className="space-x-12 lg:flex items-center">
            <Link to="/about">
              <button className="bg-pink-500 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-brandPrimary">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dir;
