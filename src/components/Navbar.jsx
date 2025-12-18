import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
      const location = useLocation();
        const [isOpen, setIsOpen] = useState(false);
        const toggleNavbar = () => {
            setIsOpen(!isOpen);
         };
    return (
        <div>
            <div className={isOpen ? "activeNavBar" : ""}>
                <div className={`nav-container ${location.pathname === "/Feed" ? "feed-nav" : ""}`}>
                    <div className="container">
                        <div className="flex">
                            <div className="row-1">
                                <img src="./assets/images/logo-img.png" alt="logo-img" />
                                <h1 className="logo-h">Events<span className="color">Free</span></h1>
                                <button className={["/Feed", "/UserName"].includes(location.pathname) ? "menu-icon F-menu-icon" : "menu-icon"} onClick={toggleNavbar}>
                                    <span className={["/Feed", "/UserName"].includes(location.pathname) ? "menu-icon-span F-menu-icon-span" : "menu-icon-span"}></span>
                                    <span className={["/Feed", "/UserName"].includes(location.pathname) ? "menu-icon-span F-menu-icon-span" : "menu-icon-span"}></span>
                                    <span className={["/Feed", "/UserName"].includes(location.pathname) ? "menu-icon-span F-menu-icon-span" : "menu-icon-span"}></span>
                                </button>
                            </div>
                            <div className={`button-nav-box ${isOpen ? 'show' : ''}`}>
                                <nav className="navbar">
                                    <div className="flex-box">
                                        <Link to="/" onClick={toggleNavbar}><p className={["/Feed", "/UserName"].includes(location.pathname) ? "nav-links black-links" : "nav-links"}>Home</p></Link>
                                        <Link to="/Events" onClick={toggleNavbar}><p className={["/Feed", "/UserName"].includes(location.pathname) ? "nav-links black-links" : "nav-links"}>Events</p></Link>
                                        <Link to="/Feed" onClick={toggleNavbar}><p className={["/Feed", "/UserName"].includes(location.pathname) ? "nav-links black-links" : "nav-links"}>FEED</p></Link>
                                        <Link to="/UserName" onClick={toggleNavbar} ><div className={["/Feed", "/UserName"].includes(location.pathname) ? "nav-links black-links" : "nav-links"}>
                                            <div className="flex1">
                                                <div>USER</div>
                                                <div>NAME</div>
                                            </div>
                                        </div></Link>
                                    </div>
                                </nav>
                                <button className="log-out">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Navbar