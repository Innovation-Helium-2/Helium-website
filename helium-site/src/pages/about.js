import React from 'react'
import classes from '../pages/about.module.css'
import AboutLogo from './aboutUs.jpg'
import Avatar1 from './Andrew.png'
import Avatar2 from './Julian.png'
import Avatar3 from './Quang.png'
const About = () => {
  return (
  
    <div>
      <section className={classes.py}>
        <div className={classes.container}>
          <div className={classes.left}>
              <h1><span className={classes.text}>About</span> H2O</h1>
              <p>
                We are H2O team, formed by RIT Innovation Fellow program. Our mission is 
                to create a reliable security system that provides reliable and affordable 
                protection for their properties using Helium network. 
              </p>
          </div>
          <div className={classes.right}>
            <img src={AboutLogo} alt='logo'/>
          </div>
        </div>
      </section>
      <section id={classes["testimonials"]} className={classes.py}>
        <div className={classes.container}>
          <h1>Our members</h1>
          <div className={classes.secondBackground}>
            <img src={Avatar1} alt="avatar1"/>
            <p>
            Andrew Chacon
            <br />
            Hi, My name is Andrew and I'm the FrontEnd Developer in this application. I'm currently a 
             Software Engineering at RIT. 
            <br />
            RIT 2025

            </p>
          </div>
          <div className={classes.secondBackground}>
            <img src={Avatar2} alt="avatar2"/>
            <p>
              Julian Mato-Hernandez
              <br />
              Hello everyone! I'm Julian and I contribute as a Hardware and Networking Developer
. I'm currently a 
             CIT student at RIT. 
              <br />
              RIT 2023
            </p>
          </div>
          <div className={classes.secondBackground}>
            <img src={Avatar3} alt="avatar3"/>
            <p>
              Quang Tran 
              <br />
              Hi there. My name is Quang and I'm the BackEnd Developer for this application. 
              <br />
              RIT 2023
            </p>
          </div>
        </div>
      </section>
    </div>
   //  <div style={{
   //      display: 'flex',
   //      flexDirection: "column",
   //      justifyContent: 'center',
   //      alignItems: 'center',
   //      height: '90vh'
   //  }
   //  }>
   //  <h1 className='textit'>About</h1>
   //  <h2 className='textit'>Problem Statement</h2>
   //  <p className='textit'>Managers of large multi-unit properties
   //     are concerned that their security systems do not 
   //     provide effective and comprehensive protection 
   //     for their properties on a cost-effective basis.</p>
   //  <h2 className='textit'>Solution Statement</h2>
   //  <p className='textit'>H2O is a security system that utilizes an integrated
   //     Helium network that is effective, easy-to-use, 
   //     and is reasonably priced.</p>
   //  <h2 className='textit'>Value Propositon Statement</h2>
   //  <p className='textit'>For Property Managers and Property Owners who want
   //     an affordable and reliable security system our helium network security system
   //      will provide reliable and affordable protection for their properties unlike ADT,
   //       Schlage and Amazon, and Ring</p>
   //  </div>
  )
}

export default About