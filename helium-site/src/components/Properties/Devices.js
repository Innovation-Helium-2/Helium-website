import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from '../sidebar/SidebarData';
import * as IoIcons from 'react-icons/io';

export const Devices = () => {

    const [show, setShow] = useState(false);
    const [inde, setInde] = useState(0);
    const [info, setInfo] = useState('');

    const showmodel = () => {
        setShow(!show);
    }

    const indeChange = (e) => {
        setInde(e.target.value);
    }

    const infoChange = (e) => {
        setInfo(e.target.value);
    }

    const handleSubmit = () => {
        SidebarData[1].subNav[inde].subNav.push({
            title: info,
            path: '/properties/devices/' + info,
            icon: <IoIcons.IoIosPaper />
        })
        showmodel();
    }

  return (
    <>
        <button className='but' onClick={showmodel}>Add Device</button>
        <ReactModal isOpen={show} className='modal' onRequestClose={showmodel} shouldCloseOnOverlayClick={true}>
            <AiOutlineClose style={{color: 'black', fontSize: '3rem'}} onClick={showmodel}/>
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
                            <input type={'text'} onChange={infoChange} placeholder='Enter Device Name'/>
                        </div>
                        <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                            <input type={'submit'} onClick={handleSubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    </>
  )
}

export default Devices