import React from 'react'
import Signin from './Signin'

const Home = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Signin/>
      </div>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
      }
      }>
      <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home