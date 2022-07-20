import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../Redux/allowSlice';
import axios from '../api/axios';
import { SidebarData } from '../components/sidebar/SidebarData'
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const INFO_CHECK_URL = '/findUser';
const PROPERTY_INFO_URL = '/propertyInfo'
const FIND_PROPERTY_URL = '/property/'
const FIND_DEVICE_URL = '/device/'

export const log = []

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
            log.pop()
            setIsLog('Sign In')
            let properties = SidebarData[1].subNav
            while(properties.length > 0){
                properties.pop();
            }
        }
        else{
            setIsOpen(!isOpen);
        }
    }

    const onSubmit = () => {
        const params = JSON.stringify({
            "name": name,
            "password": password
        })
        axios.post(INFO_CHECK_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'}})
        .then(function(response){
            console.log(response)
            log.push({
                same: name,
                pass: password,
            })
            dispatch(logIn())
            setIsLog('Log Out')
            openmodal()
            axios.post(PROPERTY_INFO_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'}})
            .then(function(response_2){
                console.log(JSON.stringify(response_2.data))
                let prop_array = SidebarData[1].subNav
                let index = 0;
                response_2.data.forEach(e => {
                    console.log(e)
                    console.log(index)
                    let info = JSON.stringify(e);
                    let sliced = info.split('\"')[4];
                    let reduced = sliced.slice(0, -1)
                    axios.get(FIND_PROPERTY_URL + reduced, {}, {headers: {"Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'}})
                    .then(function(response_3){
                        console.log(JSON.stringify(response_3.data))
                        prop_array.push({
                            title: response_3.data.property,
                            path: '/Property/' + response_3.data.property,
                            icon: <IoIcons.IoIosPaper />,
                            iconClosed: <RiIcons.RiArrowDownSFill />,
                            iconOpened: <RiIcons.RiArrowUpSFill />,
                            subNav: []
                        });
                        let devices = prop_array[index].subNav
                        response_3.data.device_id.forEach(e => {
                            let info_2 = JSON.stringify(e);
                            let sliced_2 = info_2.split('\"')[4];
                            let reduced_2 = sliced_2.slice(0, -1);
                            axios.get(FIND_DEVICE_URL + reduced_2, {}, {headers: {"Access-Control-Allow-Origin": "*",
                            'Content-Type': 'application/json'}})
                            .then(function(response_4){
                                console.log(JSON.stringify(response_4.data))
                                devices.push({
                                    title: response_4.data.device,
                                    path: '/' + response_3.data.property + '/devices/' + response_4.data.device,
                                    type: '',
                                    icon: <IoIcons.IoIosPaper />
                                })
                            })
                            index++;
                        });
                    })
                });
            })
        })
        .catch(function(e){
            console.log(e)
            window.alert('Invalid Username or Password')
        })
        
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