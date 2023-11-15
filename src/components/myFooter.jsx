/* eslint-disable no-undef */
import React from 'react'
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Footer } from 'flowbite-react';
import logo from '../assets/logo.png';

function myFooter() {
  return (
    <Footer container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='space-y-4 mb-8'>
        <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              className="h-14  inline-block items-center"
              alt=""
            />
            <span className="text-[#263238]">VTBIF</span>
          </a>
          <div > 
            <p className='mb-1'> copyright 2023  vtbif</p>
            <p> All right reserved</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="/team">
                Team
              </Footer.Link>
              <Footer.Link href="/startup">
                Startups
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Github
              </Footer.Link>
              <Footer.Link href="#">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          by="K Balaji Naik"
          href="#"
          year={2023}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="#"
            icon={BsGithub}
          />
        
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default myFooter;
