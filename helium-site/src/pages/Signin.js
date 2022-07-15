import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../Redux/allowSlice';
import axios from '../api/axios';
const INFO_CHECK_URL = '/info';
const Signin = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const [isLog, setIsLog] = useState('Sign In')

    const dispatch = useDispatch();

    const allow = useSelector((state) => state.signIn.allow)

    const openmodal = () => {
        
        if(allow){
            dispatch(logOut())
            setIsLog('Sign In')
        }
        else{
            setIsOpen(!isOpen);
        }
    }

    const onSubmit = async () => {
        try {
            const response = await axios.post(INFO_CHECK_URL,
                JSON.stringify({ name, password }),
                { 
                    headers: {"Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'}
                }
            );
            if (response?.data === null){
                window.alert("account does not exist"); 
            } else {
                dispatch(logIn())
                setIsLog('Log Out')
                openmodal()
            }
            // console.log(JSON.stringify(response));

        } catch (e) {
            if (e.response && e.response.data) {
                console.log(e.response.data.message) // some reason error message
            }
            console.log(e);
            window.alert("login failed");
        }
        
    }

        return(
            <div>
                <button className='but' onClick={openmodal}>{isLog}</button>
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
                                    <input type={'text'} placeholder='Enter Username'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}/>
                                </div>
                                <div className='input-group' style={{padding: '10px 0px 0px 0px'}}>
                                    <input type={'password'} placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}/>
                                </div>
                            </div>
                            <div className='input-group' style={{padding: '10px 100px 0px 100px', width: '90%', fontSize: ''}}>
                                <input type={'submit'} onClick={onSubmit}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

export default Signin