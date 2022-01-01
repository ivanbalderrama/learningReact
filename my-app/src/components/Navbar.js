import React from 'react';
import Logo from '../images/logo.svg';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navBar">
        <img src={Logo} className="reactLogo"></img>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar;