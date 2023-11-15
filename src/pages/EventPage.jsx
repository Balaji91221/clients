import React from 'react';
import { Link } from 'react-router-dom';
import BlogPage from '../components/Event/Events.jsx';
import { FaGreaterThan } from 'react-icons/fa';
import {AiTwotoneHome} from 'react-icons/ai'

const EventPage = () => {
  return (
    <div>
      <div className="breadcrumbs bg-gray-200 py-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-4 capitalize text-white">Event Page</h1>
            <nav>
              <ol className="list-reset flex text-gray-500">
                <li className="mr-2">
                <Link
                  to="/"
                  className="text-white hover:underline"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <AiTwotoneHome style={{ verticalAlign: "middle" }} /> Home
                  <FaGreaterThan style={{ verticalAlign: "middle" }} />
                </Link>
                </li>
                <li className="text-white capitalize">Event Page</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default EventPage;
