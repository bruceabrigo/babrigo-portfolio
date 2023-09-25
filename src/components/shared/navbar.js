import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.scss';
import Sidebar from "./sidebar"; // Import the Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        {/* Navbar links */}
        <ul className="navbar">
          <Link to='/projects' className="nav-list">Projects</Link>
        </ul>
        <Link to='/'> <h1>Bruce <span className="abrigo"> Abrigo </span> </h1></Link>
        <ul className="navbar">
          <Link to='/contact' className="nav-list">Contact</Link>
        </ul>

        {/* Toggle button for the sidebar */}
        <div className="toggle-button" onClick={toggleSidebar}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
      </header>

      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
