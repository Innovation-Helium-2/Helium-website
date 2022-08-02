import React from 'react'
import classes from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap, faClock, faSearch } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div>
      
      
      <div id={classes["showcase"]} >
        <div className={classes.container}>
          <div className={classes.showcaseContent}>
            <h1><span className={classes.text}>Manage</span> Your Property</h1>
            <h3>H2O is a security system that utilizes an integrated 
              Helium blockchain network that is effective, easy-to-use in reasonably prices.
            </h3>
            <a className={classes.btn} href="/about">About Our Application</a>
          </div>
        </div>
      </div>

      <section>
        <div className={classes.box}>
          <FontAwesomeIcon icon={faSitemap} size="3x"/>
          <h3>Great Organization</h3>
          <p>Easily manage your properties and devices with our platform.</p>
        </div>
        <div className={classes.secondbox}>
          <FontAwesomeIcon icon={faClock} size="3x"/>
            <h3>Quick Response Time</h3>
            <p>Return devices data in fast time to keep your property safe.</p>
        </div>
            
            <div className={classes.box}>
            <FontAwesomeIcon icon={faSearch} size="3x"/>
            <h3>Transparency</h3>
            <p>All the data information are being shown to you in our application.</p>
        </div>
      </section>
    </div>
  )
}

export default Home