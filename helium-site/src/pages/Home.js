import React from 'react'

const Home = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button className='but'>Signin</button>
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