import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/Home">
                <h1>Logo</h1>
            </NavLink>
            <HamburgerMenu/> 
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/Services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/Contact-Us" activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to="/Sign-Up" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}

export default Navbar;
