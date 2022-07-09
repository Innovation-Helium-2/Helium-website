import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InnerSubMenu from './InnerSubMenu';


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
      setSubnav(!subnav)
    }
  };

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
      {subnav && item.subNav.map((item, index) => {
        return <InnerSubMenu item={item} key={index}/>
      })}
    </>
  );
};

export default SubMenu;