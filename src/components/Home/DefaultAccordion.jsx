import { Accordion } from 'flowbite-react';

export default function DefaultAccordion() {
  return (
    <div >
        <div>
            <p className="text-pink-500 text-center text-lg font-semibold mb-2">− FAQ −</p>
            <p className="text-black-500 text-lg  text-center font-semibold m-2">Frequently Asked Questions</p>
        </div>

    <Accordion className='m-20 bg-white'>
      <Accordion.Panel>
        <Accordion.Title>
        What is VTBIF?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-900">
            <p>
            VTBIF is an incubator at VIT-AP University in Amaravathi, Andhra Pradesh, supporting knowledge- and technology-driven startups. It provides resources, mentoring, and a dedicated facility for incubation, aiming to foster innovation, entrepreneurship, and economic growth.
            </p>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <p>
              Check out this guide to learn how to 
            </p>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="/"
            >
              <p>
                get started
              </p>
            </a>
            
             
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        Does VTBIF offer funding support for startups?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            Yes, VTBIF provides funding support for startups. They offer financial assistance and investment opportunities to eligible startups as part of their incubation and support services.
            </p>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
           
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        How to submit the startup idea form for VTBIF?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            To submit your startup idea to VTBIF, visit their website, complete the form with relevant details and supporting documents, and submit it for review according to their guidelines.
            </p>
          </p>
          
        
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  )
}
