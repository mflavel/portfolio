import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo .svg";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import App from "./App";

const Nav = () => {
    return (
        <nav className="Nav">
            <img src={logo} alt="Logo" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order-online">Order Online</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Nav;