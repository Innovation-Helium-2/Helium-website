import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InnerSubMenu from './InnerSubMenu';
import { SidebarData } from './SidebarData';


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {

  const [subnav, setSubnav] = useState(false);

  const allow = useSelector((state) => state.signIn.allow)

  const showSubnav = () => {
    if(allow){
      cleanup()
      setSubnav(!subnav)
    }
  };

  const cleanup = () => {
    SidebarData[1].subNav.forEach(e => {
      let unique = [];
      let new_array = [];
      e.subNav.forEach(k => {
        if(!unique.includes(k.title)){
          unique.push(k.title)
          new_array.push(k)
        }
      })
      e.subNav = new_array;
    })
  }

  return (
    <>
      <SidebarLink to={'/'} onClick={ item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((stuff, index) => {
        return (<InnerSubMenu item={stuff} index={index}/>)
      })}
    </>
  );
};

export default SubMenu;