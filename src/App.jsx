// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/HomeCon';
import About from './pages/AboutPage';
import myFooter from "./components/myFooter";
import Team from './pages/TeamPage';
import Contact from './pages/ContactPage';
import Startup from './pages/StartupPage';
import Gototop from "./components/Gototop";


import Preloader from './components/Preloader';
import EventPage from './pages/EventPage';
import SinglePage from './pages/SinglePage';
import NotFound from './components/NotFound'; 


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<SinglePage />} /> 
        <Route path="*" element={<NotFound />} /> {/* This matches any unmatched path */}
      </Routes>
      <Gototop />
      <myFooter />
    </Router>
  );
}

export default App;
