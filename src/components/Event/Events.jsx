import React, { useState, useEffect } from "react";
import Pagination from "./Pagination.jsx";
import BlogCards from "./BlogCards.jsx";
import Sidebar from "./Sidebar.jsx";
import Loader from "../Loader.jsx";
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

const Events = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loadingEvent, setLoadingEvent] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true);

            try {
                let url = `https://vtbif-express.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;
                
                const response = await fetch(url);
                console.log("Blogs API URL:", url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch blogs. Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Blogs API Response:", data);

                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        }

        async function fetchEventData() {
            setLoadingEvent(true);

            try {
                const response = await fetch(`https://vtbif-express.onrender.com/blogs/${id}`);
                console.log("Event API URL:", `https://vtbif-express.onrender.com/blogs/${id}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch blog post. Status: ${response.status}`);
                }

                const result = await response.json();
                console.log("Event API Response:", result);

                setData(result);
            } catch (error) {
                console.error('Error fetching event data:', error);
            } finally {
                setLoadingEvent(false);
            }
        }

        fetchBlogs();

        if (id) {
            fetchEventData();
        }
    }, [currentPage, pageSize, selectedCategory, id]);

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
                <Loader />
            ) : (
                <>
                    {id && !loadingEvent && Object.keys(data).length > 0 && (
                        <div>
                            <div className='py-36 bg-gray-200 py-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4 '>
                                <h1 className='text-5xl leading-snug font-bold mb-5'>{data.title}</h1>
                            </div>

                            <div className='max-w-7xl  my-12 flex flex-col md:flex-row gap-12 m-10'>
                                <div className='lg:w-3/4 mx-auto'>
                                    <div><img src={data.image} alt="" className='mx-auto w-full rounded mb-5' /></div>
                                    <h2 className='text-3xl font-bold mb-4 text-blue-600 cursor-pointer'>{data.title}</h2>
                                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />  {`Event Coordinator: ${data.author}`} | {data.published_date}</p>
                                    <p className='mb-6 text-gray-600'>
                                        <BsPeopleFill className='inline-flex items-center mr-2' />
                                        {`participants: ${data.Participants}`}
                                    </p>
                                    <p className='text-sm text-gray-500 mb-6'>{data.content} </p>
                                    <div className='text-base text-gray-500'>
                                       
                                    </div>
                                </div>
                                <div className='lg:w-1/2'>
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    )}

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
