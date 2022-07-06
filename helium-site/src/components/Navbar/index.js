import React from 'react';
import Sidebar from '../sidebar/sidebar';
import HamburgerMenu from './HamburgerMenu';
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
                <h1>Logo</h1>
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
