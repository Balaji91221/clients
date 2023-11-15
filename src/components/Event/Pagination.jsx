import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, onPageChange, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li key={pageNumber} className={pageNumber === currentPage ? "activePagination" : "hover:bg-blue-200"}>
        <a
          href="#"
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-2 rounded-md ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-white'}`}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <div className="flex justify-center my-8">
      <ul className="pagination flex flex-wrap gap-4">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`border px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400'}`}
          >
            Previous
          </button>
        </li>

        <div className="flex gap-1">{renderPaginationLinks()}</div>

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`border px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default Pagination;
