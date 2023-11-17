import React from 'react';
import ameetImg from "../../assets/Team/ameet.jpeg";
import sudha from "../../assets/Team/sudha.jpeg";
import ravi from "../../assets/Team/ravi.jpg";
import Sb from "../../assets/Team/sb.jpeg";
import sam from "../../assets/Team/sam.jpg";
import sira from "../../assets/Team/sira.jpg";
import pri from "../../assets/Team/pri.jpg";
import ana from "../../assets/Team/ana.jpg";
import ani from "../../assets/Team/ani.jpg";
import sab from "../../assets/Team/Sab.png";
import azad from "../../assets/Team/azad.png";
import avin from "../../assets/Team/avin.png";
import deep from "../../assets/Team/deep.png";
import kupp from "../../assets/Team/kupp.png";
import renu from "../../assets/Team/renu.png";



const leadersData = [
    {
        name: "Dr. Ameet Chavan",
        image: ameetImg,
        role: "Director of Vtbif",
      },
      {
        name: "Dr. Sudha Ellison Mathe",
        image: sudha,
        role: "",
      },
      {
        name: "Dr. M Ravindra",
        image: ravi,
        role: "",
      },
      {
        name: "S. Sibi Chakkaravarthy",
        image: Sb,
        role: "",
      },
      {
        name: "Prof. Samuel Johnson",
        image: sam,
        role: "",
      },
      {
        name: "Dr. Y Md. Sirajudeen",
        image: sira,
        role: "",
      },
      {
        name: "Dr. S. Priyanka",
        image: pri,
        role: "",
      },
      {
        name: "Dr. Anindita Shome",
        image: ani,
        role: "",
      },
      {
        name: "Prof. Ananthu S. Hari",
        image: ana,
        role: "",
      },
      {
        name: "Dr. Sabeel Basheer",
        image: sab,
        role: "",
      },
      {
        name: "Dr. Abdul Kalam Azad",
        image: azad,
        role: "",
      },
      {
        name: "Prof. Avin Tiwari",
        image: avin,
        role: "",
      },
      {
        name: "Dr. Deepjoy Katuwal",
        image: deep,
        role: "",
      },
      {
        name: "Dr. Kuppusamy P",
        image: kupp,
        role: "",
      },
      {
        name: "Dr. Renuprasad Patki",
        image: renu,
        role: "",
      },
    // Add more objects for additional leaders
  ];
  
  function tesm() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="text-center">
          <p className="text-pink-500 text-lg font-semibold">− Our Team −</p>
         
        </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Dynamic Incubation Center Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Discover the faces behind VT-BIF, a team dedicated to innovation and startup success. From visionary leaders to skilled advisors and R&D enthusiasts, we collaborate to shape the future of technology. Join us on this exciting journey!</p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
            {leadersData.map((leader, index) => (
              <li key={index}>
                <div className="flex flex-col items-center gap-y-4">
                  <img className="h-36 w-32 rounded" src={leader.image} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{leader.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{leader.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default tesm;
  