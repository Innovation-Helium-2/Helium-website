import React, { useState, useEffect } from 'react'
import { SidebarData } from '../components/sidebar/SidebarData';
import { useLocation } from 'react-router-dom';
import classes from './Device.module.css'
import Sensor from './sensor.jpg'
import Status from './status.png'
const Device = () => {
    const search = useLocation();
    const url = search.pathname.split('/')
    const [pageName] = url?.[3]
    const [propertyName] = url?.[1]
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        let index = lookforindexP(url[1]);

        let device = lookforindexD(url[3], index);

        setDeviceType(SidebarData[1].subNav[index].subNav[device].type);
    }, [propertyName, pageName, url])

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
    <div>
        <div className={classes.py}> 
            <div className={classes.container}>      
                    <div id={classes["leftContainer"]}>
                        <div className={classes.left}>
                            <img src={Sensor} alt="sensor"/>
                        </div>
                        <div className={classes.right}>
                            <h2>{url[3]} <img src={Status} alt="sensor" className={classes.status}/></h2>
                            <p>version: 1.0</p>
                            <p>status: online </p>
                        </div>
                    </div>
                
                <div id={classes["rightContainer"]}>
                    <h2>Device Information</h2>
                    <div className={classes.box}>
                        <p>Manage by</p>
                        <p>Quang</p>
                    </div>
                    <div className={classes.box}>
                        <p>Device Type</p>
                        <p>{deviceType}</p>
                    </div>
                    <div className={classes.box}>
                        <p>Device ID</p>
                        <p>1240091987</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div style={{height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    //     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
    //         <h1>Device Name: {url[3]}</h1>
    //     </div>
    //     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
    //         <h2>Device Type: {deviceType}</h2>
    //     </div>
    //     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px'}}>
    //         <h3>Alerts:</h3>
    //     </div>
    // </div>
  )
}

export default Device