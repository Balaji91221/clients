import React, { useState, useEffect } from "react";

import Pagination from "./Pagination.jsx";
import BlogCards from "./BlogCards.jsx";
import Sidebar from "./Sidebar.jsx";

const Events = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of products to show per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `https://vtbif-express.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;

            // If a category is selected, add it to the request
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset the page to 1 when a new category is selected
        setActiveCategory(category)
    };

    return (
        <div className="m-11">
         <div className="text-center mb-8 m-24">
        <p className="text-pink-500 text-lg font-semibold mb-2">− What We do −</p>
        <p className="text-black-500 text-lg font-semibold">Our Events</p>
      </div>

            <div className="flex flex-col lg:flex-row gap-12 ">

                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
                
                <div>
                    <Sidebar/>
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                blogs={blogs}
                pageSize={pageSize}
            />
        </div>
    );
};


export default Events;
