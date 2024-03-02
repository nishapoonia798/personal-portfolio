import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <>
        <MobileNav isOpen= {openMenu} togglemenu={toggleMenu} />
        <nav classsName="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo.svg" alt="" />
                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>
                    <button className="contact-btn" onClick={()=>{}}>Hire Me</button>
                </ul>
                <button class="menu-btn" onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"}
                    style={{fontSize: "1.8rem"}}
                    >
                        {openMenu ? "close" : "menu"}
                        menu
                    </span>
                </button>
            </div>
        </nav>
        </>
        
    );
}

export default Navbar;