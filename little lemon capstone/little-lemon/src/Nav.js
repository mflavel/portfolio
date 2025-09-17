import React from "react";
import logo from "./images/Logo .svg";

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href="url">Home</a></li>
                <li><a href="url">About</a></li>
                <li><a href="url">Menu</a></li>
                <li><a href="url">Reservations</a></li>
                <li><a href="url">Order Online</a></li>
                <li><a href="url">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;