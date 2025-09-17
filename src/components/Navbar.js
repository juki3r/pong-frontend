import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../pages/images/logo.png";
import "../App.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary shadow">
            <div className="container-fluid">
                {/* Brand */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={Logo} className="logo me-1" alt="logo" />
                    <span className="title">PONG-MTA <span className="title2">(All-in-One Services)</span></span>
                </a>

                {/* Custom Toggler */}
                <button
                    className={`custom-toggler d-sm-none ${menuOpen ? "open" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                </button>

                {/* Collapsible menu */}
                <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/contact">
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Login
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
