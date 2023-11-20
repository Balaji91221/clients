import React, { useState, useEffect } from "react";
import Pagination from "./Pagination.jsx";
import BlogCards from "./BlogCards.jsx";
import Sidebar from "./Sidebar.jsx";
import Loader from "../Loader.jsx"; // Import your loader component

const Events = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true); // New state for loading

    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true); // Set loading to true when starting to fetch data

            try {
                let url = `https://vtbif-express.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;

                if (selectedCategory) {
                    url += `&category=${selectedCategory}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false); // Set loading to false when data is fetched (or if there's an error)
            }
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };

    return (
        <div className="m-11">
            {loading ? (
                <Loader /> // Render your loader while data is being fetched
            ) : (
                <>
                    <div className="text-center mb-8 m-24">
                        <p className="text-pink-500 text-lg font-semibold mb-2">− What We do −</p>
                        <p className="text-black-500 text-lg font-semibold">Our Events</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 ">
                        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
                        <div>
                            <Sidebar />
                        </div>
                    </div>

                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} blogs={blogs} pageSize={pageSize} />
                </>
            )}
        </div>
    );
};

export default Events;
