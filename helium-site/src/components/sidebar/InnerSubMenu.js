import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropdownLink = styled.div`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const InnerDropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const InnerSubMenu = ({ item, index }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

  return (

<>
            <DropdownLink key={index} onClick={item.subNav && showSubnav}>
              <div>
                {item.icon}
                <SidebarLabel>
                  {item.title}
                </SidebarLabel>
              </div>
              <div>
                {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
              </div>
            </DropdownLink>
            {subnav && item.subNav.map((dev, index) => {
              return (
                <>
                  <InnerDropdownLink to={dev.path} key={index}>
                    {dev.icon}
                    <SidebarLabel>
                      {dev.title}
                    </SidebarLabel>
                  </InnerDropdownLink>
                </>
              );
            })}
</>
  )
}

export default InnerSubMenu