import React from "react";
import { Link } from "react-router-dom";
import './sidebar.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            {/* Sidebar content */}
            <button className="close-button" onClick={toggleSidebar}>
            X
            </button>
            {/* Add more content here */}
            <div className="side-nav-content">
                <Link to="/contact" className="side-nav-links" onClick={toggleSidebar}>Contact</Link>
            </div>
        </div>
    );
};

export default Sidebar;
