import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, togglemenu }) => {
    return (
        <>
            <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={togglemenu}
            >
                <div className='mobile-menu-container'>
                    <img className='logo' src='./assets/images/logo.svg' alt="" />
                    <ul>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item'>Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={()=>{}}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default MobileNav;