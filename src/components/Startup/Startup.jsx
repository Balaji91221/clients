import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import {AiTwotoneHome} from 'react-icons/ai'
function Startup() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumbs bg-gray-200 py-36  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Adjust the "py-8" class for increased container height */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4 capitalize text-white">
            {pathnames[pathnames.length - 1]}
          </h1>
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
              {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                  <li key={path} className="text-white capitalize">{path}</li>
                ) : (
                  <li key={path} className="text-white">
                    <Link to={routeTo} className="text-blue-500 hover:underline capitalize">
                      {path}
                    </Link>
                    <span className="mx-1">/</span>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Startup;
