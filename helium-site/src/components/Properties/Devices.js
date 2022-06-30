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
        <ReactModal isOpen={show}>
            <AiOutlineClose style={{color: 'black'}} onClick={showmodel}/>
            <form>
                <select value={inde} onChange={indeChange}>
                    {SidebarData[1].subNav.map((item, index) => {
                        return <option value={index}>{item.title}</option>
                    })}
                </select>
                <input type={'text'} onChange={infoChange}/>
                <input type={'submit'} onClick={handleSubmit}/>
            </form>
        </ReactModal>
    </>
  )
}

export default Devices