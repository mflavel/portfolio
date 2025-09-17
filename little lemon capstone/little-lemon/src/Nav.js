import React from "react";
import logo from "./images/Logo .svg";

const Nav = () => {
    return (
        <nav className="Nav">
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href="url"><b>Home</b></a></li>
                <li><a href="url"><b>About</b></a></li>
                <li><a href="url"><b>Menu</b></a></li>
                <li><a href="url"><b>Reservations</b></a></li>
                <li><a href="url"><b>Order Online</b></a></li>
                <li><a href="url"><b>Login</b></a></li>
            </ul>
        </nav>
    );
}

export default Nav;