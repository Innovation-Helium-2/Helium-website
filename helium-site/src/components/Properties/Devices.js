import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from '../sidebar/SidebarData';
import * as IoIcons from 'react-icons/io';
import { useSelector } from 'react-redux';
import axios from '../../api/axios';

const DEVICE_URL = '/device'

export const Devices = () => {

    const [show, setShow] = useState(false);
    const [inde, setInde] = useState(0);
    const [info, setInfo] = useState('');
    const allow = useSelector((state) => state.signIn.allow)

    const showmodel = () => {
        if(allow){
            setShow(!show);
        }
    }

    const indeChange = (e) => {
        setInde(e.target.value);
    }

    const infoChange = (e) => {
        setInfo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = JSON.stringify({
            "device": info,
        });
        axios.post(DEVICE_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'}})
        .then(function(response){
            console.log(JSON.stringify(response));
            SidebarData[1].subNav[inde].subNav.push({
                title: info,
                path: '/properties/devices/' + info,
                icon: <IoIcons.IoIosPaper />
            })
            showmodel();
        })
        .catch(function(e) {
            console.log(e);
        });
    }

  return (
    <>
        <button className='but' onClick={showmodel}>Add Device</button>
        <ReactModal isOpen={show} className='modal' onRequestClose={showmodel} shouldCloseOnOverlayClick={true}>
            <div style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
                <AiOutlineClose style={{color: 'black', fontSize: '3rem'}} onClick={showmodel}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <div className='input-container'>
                    <form>
                        <h1>Device</h1>
                        <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                            <select value={inde} onChange={indeChange} placeholder='Pick A Property'>
                                {SidebarData[1].subNav.map((item, index) => {
                                    return <option value={index}>{item.title}</option>
                                })}
                            </select>
                        </div>
                        <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                            <select>
                                <option>Temperature Sensor</option>
                                <option>Humidity Sensor</option>
                                <option>Motion Sensor</option>
                                <option>Contact Sensor</option>
                                <option>Gas / Air Quality Sensor</option>
                                <option>Electrical Current Monitoring Sensor</option>
                                <option>Water Quality Sensor</option>
                                <option>Smoke Sensor</option>
                                <option>Image Sensor</option>
                                <option>Chemical Sensor</option>
                                <option>Pressure Sensor</option>
                            </select>
                        </div>
                        <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                            <input type={'text'} onChange={infoChange} placeholder='Enter Device Name'/>
                        </div>
                        <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                            <input type={'submit'} onClick={(e) => handleSubmit(e)}/>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    </>
  )
}

export default Devices