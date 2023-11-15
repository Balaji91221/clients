import React, { useState } from "react";
import { Card,  CardBody, Typography } from "@material-tailwind/react";
import ameetImg from "../../assets/Team/ameet.jpeg";
import sudha from "../../assets/Team/sudha.jpeg"
import ravi from "../../assets/Team/ravi.jpg"

import Sb from "../../assets/Team/sb.jpeg"
import sam from "../../assets/Team/sam.jpg"
import sira from "../../assets/Team/sira.jpg"
import pri from "../../assets/Team/pri.jpg"
import ana from "../../assets/Team/ana.jpg"
import ani from "../../assets/Team/ani.jpg"
import sab from "../../assets/Team/sab.png"
import azad from "../../assets/Team/azad.png"
import avin from "../../assets/Team/avin.png"
import deep from "../../assets/Team/deep.png"
import kupp from "../../assets/Team/kupp.png"
import renu from "../../assets/Team/renu.png"
function Members() {
  const initialDisplayCount = 3; // Number of team members to display initially
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  // Define an array of team members
  const teamMembers = [
    {
      name: "Dr. Ameet Chavan",
      image: ameetImg, // Use `require` for relative paths
      position: "Director of Vtbif",
    },
    
    {
      name: "Dr. Sudha Ellison Mathe",
      image: sudha,
      position: "",
    },
    {
      name: "Dr. M Ravindra",
      image: ravi,
      position: "",
    },
    
    {
      name: "S. Sibi Chakkaravarthy",
      image: Sb,
      position: "",
    },
    {
      name: "Prof. Samuel Johnson",
      image: sam,
      position: "",
    },
    {
      name: "Dr. Y Md. Sirajudeen",
      image: sira,
      position: "",
    },
    {
      name: "Dr. S. Priyanka",
      image: pri,
      position: "",
    },
    {
      name :"Dr. Anindita Shome",
      image: ani,
      position:""
    },
    {
      name :"Prof. Ananthu S. Hari",
      image: ana,
      position:""
    },
    {
      name :"Dr. Sabeel Basheer",
      image: sab,
      position:""
    },
    {
      name :"Dr. Abdul Kalam Azad",
      image: azad,
      position:""
    },
    {
      name :"Prof. Avin Tiwari",
      image: avin,
      position:""
    },
    {
      name :"Dr. Deepjoy Katuwal",
      image: deep,
      position:""
    },
    {
      name :"Dr. Kuppusamy P",
      image: kupp,
      position:""
    },
    {
      name :"Dr. Renuprasad Patki",
      image: renu,
      position:""
    },
    // Add more team members here
  ];

  const handleLoadMore = () => {
    // Increase the display count to reveal more team members
    setDisplayCount(displayCount + 3); // Change the number as per your preference
  };

  return (
    <div>
      <div className="text-center mb-8 m-20">
        <div className="text-center m-10">
          <p className="text-pink-500 text-lg font-semibold ">− Our Team −</p>
          <p className="text-black-500 text-lg font-semibold">
            Meet Our Dynamic Incubation Center Team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {teamMembers.slice(0, displayCount).map((member, index) => (
            <Card key={index}  className="w-full ">
              <img
                src={member.image}
                alt="profile-picture"
                className="rounded-lg mx-auto m-4"
                style={{ width: "60%", height: "70%" }}
              />
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {member.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  {member.position}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
        {displayCount < teamMembers.length && (
          <div className="text-center mt-6">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;