import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './home.scss';
import Sidebar from "./sidebar"; // Import the Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;

      // Update the state based on the scroll position
      setIsScrolled(scrollDown > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        {/* Navbar links */}
        <ul className="navbar">
          <Link to="/projects" className="nav-list">
            Projects
          </Link>
        </ul>
        <Link to="/">
          {" "}
          <h1>
            Bruce <span className="abrigo"> Abrigo </span>{" "}
          </h1>
        </Link>
        <ul className="navbar">
          <Link to="/contact" className="nav-list">
            Contact
          </Link>
        </ul>

        {/* Toggle button for the sidebar */}
        <div className="toggle-button" onClick={toggleSidebar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>

      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
