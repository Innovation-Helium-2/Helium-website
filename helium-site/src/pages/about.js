import React from 'react'
import classes from '../pages/about.module.css'
import AboutLogo from './aboutUs.jpg'
import Avatar from './avatar.jpg'
const About = () => {
  return (
  
    <div>
      <section className={classes.py}>
        <div className={classes.container}>
          <div className={classes.left}>
              <h1><span className={classes.text}>About</span> H2O</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias cumque unde ducimus vel aperiam dignissimos molestiae expedita. Incidunt earum soluta omnis, dolorum autem tempora veniam quis voluptate eaque quas.</p>
          </div>
          <div className={classes.right}>
            <img src={AboutLogo} alt='logo'/>
          </div>
        </div>
      </section>
      <section id={classes["testimonials"]} className={classes.py}>
        <div className={classes.container}>
          <h2>Our members</h2>
          <div className={classes.secondBackground}>
            <img src={Avatar} alt="avatar"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
          </div>
          <div className={classes.secondBackground}>
            <img src={Avatar} alt="avatar"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
          </div>
          <div className={classes.secondBackground}>
            <img src={Avatar} alt="avatar"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
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