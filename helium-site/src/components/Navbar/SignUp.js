import React, { useState } from 'react'
import ReactModal from 'react-modal'
import axios from '../../api/axios';
const USER_URL = '/user';
const PROPERTY_URL = '/property';
const DEVICE_URL = '/device';
const SignUp =  () => {

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const [property,setProperty] = useState('');
    const [device,setDevice] = useState('');
    const openmodal = () => {
        
        
        setShowModal(!showModal);
    }
    const onSubmit = async(e) => {
        e.preventDefault(); 
        console.log(name, password,property,device);
        try {
            const response = await axios.post(USER_URL,
                JSON.stringify({ name, password }),
                { 
                    headers: {"Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'}
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));

            const propertyUpdate = await axios.post(PROPERTY_URL, JSON.stringify({property}),
            { 
                headers: {"Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'}
            });
            console.log(JSON.stringify(propertyUpdate?.data));
            console.log(JSON.stringify(propertyUpdate));

            const deviceUpdate = await axios.post(DEVICE_URL, JSON.stringify({device}),
            { 
                headers: {"Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'}
            });
            console.log(JSON.stringify(deviceUpdate?.data));
            console.log(JSON.stringify(deviceUpdate));
        } catch (e) {
            if (e.response && e.response.data) {
                console.log(e.response.data.message) // some reason error message
            }
            console.log(e);
            window.alert("signup failed");
        }
        setShowModal(!showModal);
    }

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button className='but' onClick={openmodal}>Sign Up</button>
        <ReactModal isOpen={showModal} className='modal' style={{display: 'flex', justifycontent: 'center'}} onRequestClose={openmodal} shouldCloseOnOverlayClick={true}>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <div className='input-container'>
                    <div className='input-group'>
                        <h1>Sign Up</h1>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter Username'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='password' placeholder='Enter Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter First Property Name'
                            onChange={(e) => setProperty(e.target.value)}
                            value={property}/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter First Device Name'
                            onChange={(e) => setDevice(e.target.value)}
                            value={device}/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='submit' onClick={onSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    </div>
  )
}

export default SignUp