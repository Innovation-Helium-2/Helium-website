import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';

const Signin = () => {

    const [isOpen, setIsOpen] = useState(false);


    const openmodal = () => {
        setIsOpen(!isOpen);
    }

        return(
            <div>
                <button className='but' onClick={openmodal}>Signin</button>
                <Modal isOpen={isOpen} className='modal' onRequestClose={openmodal} shouldCloseOnOverlayClick={true}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <AiIcons.AiOutlineClose onClick={openmodal} style={{fontSize: '3rem'}}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                        <h1>Login</h1>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <div className='input-container'>
                                <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                                    <input type={'text'} placeholder='Enter Username'/>
                                </div>
                                <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                                    <input type={'password'} placeholder='Enter Password'/>
                                </div>
                            </div>
                            <div className='input-group' style={{padding: '10px 100px 0px 100px', width: '90%', fontSize: ''}}>
                                <input type={'submit'} onClick={openmodal}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

export default Signin