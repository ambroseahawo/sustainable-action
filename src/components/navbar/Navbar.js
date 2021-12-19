import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import './navbar.css'

const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick =() => {
        setClick(!click)
    }

    return (
        <Navbar bg='navBgColor' variant='dark' fixed='top' expand='sm'>
            <Navbar.Brand href='/'>
                <img className='nav-logo' src={logo} alt="sa" height="56"/>
            </Navbar.Brand>

            <Navbar.Toggle as='div' bsPrefix='menu-icon' onClick={handleClick}>
                <i className={click ? 'lnr lnr-cross' : 'lnr lnr-menu'} ></i>
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About Us</Nav.Link>
                    <Nav.Link href='#rs-footer'>Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            {/* <div id="overlay" className={ click ? 'display-overlay': 'display-none' } onClick={handleClick}></div> */}
        </Navbar>
    )
}

export default Header
