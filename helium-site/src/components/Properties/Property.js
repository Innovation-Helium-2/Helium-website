import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from '../sidebar/SidebarData';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { useSelector } from 'react-redux';
import axios from '../../api/axios';
import { log } from '../../pages/Signin';

const ADD_PROPERTY_URL = '/addProperty/';
const PROPERTY_URL = '/property'

export const PropertyButton = () => {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState('');
    const allow = useSelector((state) => state.signIn.allow)

    const showmodel = () => {
        if(allow){
            setShow(!show);
        }
    }

    const infoChange = (e) => {
        setInfo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(info === ''){
            window.alert('Need to Input Property Name')
        }
        else{
            const params_2 = JSON.stringify({
                "name": log[0].same,
                "password": log[0].pass
            });
            console.log(log)
            const params = JSON.stringify({
                "property": info,
                "device_id": [],
            })
            axios.post(PROPERTY_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'}})
            .then(function(response){
                console.log(JSON.stringify(response.data.insertedId))
                let info_1 = JSON.stringify(response.data.insertedId);
                let sliced = info_1.split('\"')[3];
                console.log(sliced)
                axios.put(ADD_PROPERTY_URL + sliced, params_2, {headers: {"Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'}})
                .then(function(response_2){
                    console.log(response_2)
                    SidebarData[1].subNav.push({
                        title: info,
                        path: '/Property/' + info,
                        icon: <IoIcons.IoIosPaper />,
                        iconClosed: <RiIcons.RiArrowDownSFill />,
                        iconOpened: <RiIcons.RiArrowUpSFill />,
                        subNav: []
                    });
                    showmodel()
                })
            })
    }
    }

    return (
        <>
            <button className='but' onClick={showmodel}>Add Property</button>
            <Modal isOpen={show} className='modal' onRequestClose={showmodel} shouldCloseOnOverlayClick={true}>
                <div style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <AiOutlineClose style={{color: 'black', fontSize: '3rem'}} onClick={showmodel}/>
                </div>
               <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <div className='input-container'>
                        <form>
                                <h1>Property</h1>
                                <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                                    <input type='text' onChange={infoChange} placeholder='Enter Property Name Here'/>
                                </div>
                                <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                                    <input type='submit' onClick={(e) => onSubmit(e)}/>
                                </div>
                        </form>
                    </div> 
               </div>
            </Modal>
        </>
    );
}