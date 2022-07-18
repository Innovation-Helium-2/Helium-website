import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from '../sidebar/SidebarData';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { useSelector } from 'react-redux';
import axios from '../../api/axios';

const PROPERTY_URL = '/property';

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
            const params = JSON.stringify({
                "property": info,
            });
            axios.post(PROPERTY_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'}})
            .then(function(response){
                console.log(JSON.stringify(response));
                SidebarData[1].subNav.push({
                    title: info,
                    path: '/Property/' + info,
                    icon: <IoIcons.IoIosPaper />,
                    iconClosed: <RiIcons.RiArrowDownSFill />,
                    iconOpened: <RiIcons.RiArrowUpSFill />,
                    subNav: []
                });
                showmodel();
                console.log(SidebarData);
            })
            .catch(function(e) {
                console.log(e);
            });
            
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