import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo .svg";


const Nav = () => {
    return (
        <nav className="Nav">
            <div className="site-inner">
                <img src={logo} alt="Logo" />
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order-online">Order Online</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;