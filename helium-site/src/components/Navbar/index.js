import React from 'react';
import Sidebar from '../sidebar/sidebar';
import HamburgerMenu from './HamburgerMenu';
import Logo from './H20 logo.png'
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarElements';

const Navbar = () => {

  return (
    <div>
        <Nav>
            <div style={{position: 'absolute', left: '0%'}}>
                <Sidebar />
            </div>
            <NavLink to="/Home">
                <img src={Logo} alt='logo' style={{height: '100px', width: '100px'}}/>
            </NavLink>
            <HamburgerMenu/> 
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/Contact-Us" activeStyle>
                    Contact Us
                </NavLink>
            </NavMenu>
        </Nav>
    </div>
  )
}

export default Navbar;
