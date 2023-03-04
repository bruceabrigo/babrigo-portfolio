import React from "react";
import { Link } from "react-router-dom";
import './home.scss';

const Navbar = () => (
    <>
        <header>
            <ul class="navbar">
                <li> <Link to='/projects' className="nav-list">Projects</Link></li>
                <li>Skills</li>
            </ul>
            <h1>
                Bruce <span class="abrigo"> Abrigo </span>
            </h1>
            <ul class="navbar">
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </header>

    </>
)

export default Navbar