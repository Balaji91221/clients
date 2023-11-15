import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons from react-icons

function ContactForm() {
  const directorInfo = [
    {
      name: 'Dr. Ameet Chavan',
      email: 'director.iiec@vitap.ac.in',
      phone: '123-456-7890',
    },
 
  ];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data and submit it as needed
    // You can add your form submission logic here

    // After successful submission, set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <p className="text-pink-500 text-lg text-center font-semibold">− Contact Us −</p>

        {isSubmitted ? (
          <div className="text-center">
            <p className="mb-8 font-light text-center text-green-500 dark:text-green-400 sm:text-xl transition-transform transform hover:scale-105">
              Thank you for your message! We will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Fill out the form below to get in touch with us.
            </p>
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
              <div className="transition-transform transform hover:scale-105">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="director.iiec@vitap.ac.in"
                  required
                />
              </div>
              <div className="transition-transform transform hover:scale-105">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2 transition-transform transform hover:scale-105">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-pink-500 sm:w-fit hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-transform transform hover:scale-105"
              >
                Send message
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 ">
              {directorInfo.map((director, index) => (
                <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{director.name}</div>
                    <p className="text-gray-700 text-base">
                      <FaEnvelope className="inline text-gray-500 mr-2" />
                      {director.email}
                    </p>
                    <p className="text-gray-700 text-base">
                      <FaPhone className="inline text-gray-500 mr-2" />
                      {director.phone}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
              If you have any questions or suggestions, feel free to get in touch with us!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
