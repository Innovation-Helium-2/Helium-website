import React, { useState} from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from '../sidebar/SidebarData';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const PropertyButton = () => {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState('');

    const showmodel = () => {
        setShow(!show);
    }

    const infoChange = (e) => {
        setInfo(e.target.value);
    }

    const onSubmit = () => {
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
    }

    return (
        <>
            <button className='but' onClick={showmodel}>Add Property</button>
            <Modal isOpen={show}>
               <AiOutlineClose style={{color: 'black'}} onClick={showmodel}/> 
               <form>
                    <label>
                        Property ID
                    </label>
                    <input type='text' onChange={infoChange}/>
                    <input type='submit' onClick={onSubmit}/>
               </form>
            </Modal>
        </>
    );
}