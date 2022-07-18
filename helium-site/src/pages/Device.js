import React, { useState, useEffect } from 'react'
import { SidebarData } from '../components/sidebar/SidebarData';
import { useLocation } from 'react-router-dom';

const Device = () => {
    const search = useLocation();
    const url = search.pathname.split('/')
    const [pageName] = url?.[3]
    const [propertyName] = url?.[1]
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        let index = lookforindexP(propertyName);

        let device = lookforindexD(pageName, index);

        setDeviceType(SidebarData[1].subNav[index].subNav[device].type);
    }, [propertyName, pageName])

    const lookforindexP = (info) => {
        let place = SidebarData[1].subNav
        let index = 0;
        for (let i = 0; i < place.length; i++) {
            const element = place[i];
            if(element.title === info){
                index = i;
            }
        }
        return index;
    }

    const lookforindexD = (info, index) => {
        let place = SidebarData[1].subNav[index].subNav
        let inf = 0;
        for (let i = 0; i < place.length; i++) {
            const element = place[i];
            if(element.title === info){
                inf = i;
            }
        }
        return inf;
    }

  return (
    <div style={{height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
            <h1>Device Name: {pageName}</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
            <h2>Device Type: {deviceType}</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
            <h3>Alerts:</h3>
        </div>
    </div>
  )
}

export default Device