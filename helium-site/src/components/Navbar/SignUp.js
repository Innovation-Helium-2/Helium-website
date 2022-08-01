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

    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log(name, password,property,device);
        const params = JSON.stringify({
            "device": device,
            "device_type": "",
        });
        console.log(params);
        axios.post(DEVICE_URL, params, {headers: {"Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'}})
        .then(function(response) {
            console.log(response.data.insertedId);
            const params_2 = JSON.stringify({
                "property": property,
                "device_id": [
                    JSON.stringify(response.data.insertedId)
                ]
            })
            axios.post(PROPERTY_URL, params_2, {headers: {"Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'}})
            .then(function(response_2){
                console.log(JSON.stringify(response_2.data))
                const params_3 = JSON.stringify({
                    "name": name,
                    "password": password,
                    "property_id": [
                        JSON.stringify(response_2.data.insertedId)
                    ]
                })
                axios.post(USER_URL, params_3, {headers: {"Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'}})
                .then(function(response_3){
                    console.log(JSON.stringify(response_3.data.insertedId))
                    openmodal();
                })
            })
        })
        .catch(function(e) {
            console.log(e);
            window.alert('Sign Up failed')
        })
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