import React from "react";
import { Link } from "react-router-dom";
import './home.scss';

const Navbar = () => (
    <>
        <header>
            <ul class="navbar">
                <Link to='/projects' className="nav-list">Projects</Link>
            </ul>
            <Link to='/'> <h1>Bruce <span class="abrigo"> Abrigo </span> </h1></Link>
            <ul class="navbar">
                <Link to='/contact' className="nav-list">Contact</Link>
            </ul>
        </header>

    </>
)

export default Navbar