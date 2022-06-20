import React from 'react'

const About = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    }
    }>
    <h1>About</h1>
    <h2>Problem Statement</h2>
    <p>Managers of large multi-unit properties
       are concerned that their security systems do not 
       provide effective and comprehensive protection 
       for their properties on a cost-effective basis.</p>
    <h2>Solution Statement</h2>
    <p>H2O is a security system that utilizes an integrated
       Helium network that is effective, easy-to-use, 
       and is reasonably priced.</p>
    <h2>Value Propositon Statement</h2>
    <p>For Property Managers and Property Owners who want
       an affordable and reliable security system our helium network security system
        will provide reliable and affordable protection for their properties unlike ADT,
         Schlage and Amazon, and Ring</p>
    </div>
  )
}

export default About