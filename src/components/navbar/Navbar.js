import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        if (window.innerWidth < 960) {
            setClick(!click)
        }
    }

    return (
        <div id="header">
            <div className="container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'lnr lnr-cross' : 'lnr lnr-menu'} ></i>
                </div>
                <div className={click ? "" : "row align-items-center justify-content-between dflex"}>
                    <div id="logo">
                        <Link to="/">
                            <img className='logo' src={Logo} alt="SA-logo" height="56"/>
                        </Link>
                    </div>
                    
                    <nav id="nav-menu-container">
                        <ul className={click ? "nav-menu mobile-nav" : "nav-menu"}>
                            <li className="nav-item" onClick={handleClick}>
                                <Link to="/" className='nav-links'>home</Link>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <Link to="/about" className='nav-links'>about us</Link>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <Link to="/" className='nav-links'>contact us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="overlay" className={ click ? 'display-overlay': 'display-none' } onClick={handleClick}></div>
        </div>
    )
}

export default Navbar
