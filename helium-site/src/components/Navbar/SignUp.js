import React, { useState } from 'react'
import ReactModal from 'react-modal'

const SignUp = () => {

    const [showModal, setShowModal] = useState(false);

    const openmodal = () => {
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
                            <input type='text' placeholder='Enter Username'/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter Password'/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter First Property Name'/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='text' placeholder='Enter First Device Name'/>
                        </div>
                        <div style={{padding: '10px 0px 10px 0px'}}>
                            <input type='submit' onClick={openmodal}/>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    </div>
  )
}

export default SignUp