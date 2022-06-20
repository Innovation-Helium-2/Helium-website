import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#0b1b5a",
  primaryLight: "#8399ed",
};

const MenuLabel = styled.label`
@media screen and (max-width: 768px) {
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 0.6rem;
  right: 1.1rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;

}
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    background-color: ${(props) => (props.clicked ? "transparent" : "blue")};
    width: 1rem;
    height: 1px;
    display: inline-block;
    margin-top: 2rem;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      background-color: blue;
      width: 3rem;
      height: 2px;
      display: inline-block;
      position: absolute;
      top: 0;
      right: -0.5rem;
      transition: all 0.3s;
    }
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-1rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.8rem")};
      transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
    ${MenuLabel}:hover &::before {
      top: ${(props) => (props.clicked ? "0" : "-1rem")};
    }
    ${MenuLabel}:hover &::after {
      top: ${(props) => (props.clicked ? "0" : "1rem")};
    }

  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/Home">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/Contact-us">
              Contact Us
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
