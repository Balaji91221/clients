import React from 'react';
import mukesh from '../../assets/Team/advisorycommitte/mukesh.jpg'
import anil from '../../assets/Team/advisorycommitte/anil.jpg'
import sridhar from '../../assets/Team/advisorycommitte/sridhar.jpg'
import balachandran from '../../assets/Team/advisorycommitte/balachandran.jpg'
import ravi from '../../assets/Team/advisorycommitte/Ravi.jpg'
import bhanu from '../../assets/Team/advisorycommitte/bhanu.jpg'

const leadersData = [
  {
      name: "Dr. Mukesh Tripathi",
      image:mukesh ,
      role: "Director & CEO, AIIMS ",
      subrole : "Mangalari, Ap"
    },
    {
      name: "Mr.Anil Kumar Tentu",
      image:anil,
      role: "CEO, AP Innovation Society(APIS)",
      subrole: "Govt. of the Andhra Pradesh"
    },
    {
      name: "Mr.Sridhar Kosaraju",
      image:sridhar,
      role: "Founder & CEO@Nimaisoft | chairman @DeepTech & Naipunya | Former State President@ItAAP | AI",
      subrole: "Evangelist | Angel Investor | Mentor"
    },
    {
      name: "Dr.Balachandran A",
      image:balachandran,
      role: "Manging Director",
      subrole: "VIT TBI Incubation Center"
    },
    {
      name: "Mr.Ravi Eswarapu",
      image:ravi,
      role: "TIEAP President",
      subrole: "CEO aHUB (Andhra University)"
    },
    {
      name: "Mr.Bhnau Prakash Varla",
      image:bhanu,
      role: "Angel Investor, Partner & Director -",
      subrole: "Plural technology Pvt. Ltd"
    }
  ]

const AdvisoryCommitteeDetails = () => {
  return (
    <div className="w-full h-100 mx-auto p-6 bg-white-100 shadow-lg rounded-md  ">
       <div className="text-center m-8 ">
          <p className="text-pink-500 text-lg font-semibold">− VTBIF Proposed Advisory Committee −</p>
         
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
            {leadersData.map((leader, index) => (
              <li key={index}>
                <div className="flex flex-col items-center gap-y-4">
                  <img className="h-40 w-40 rounded" src={leader.image} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{leader.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{leader.role}</p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{leader.subrole}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    </div>
  );
};

export default AdvisoryCommitteeDetails;
