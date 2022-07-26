import React from 'react'
import Signin from './Signin'
import classes from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap, faClock, faSearch } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div>
      
      
      <div id={classes["showcase"]} >
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Signin/>
        </div>
        <div className={classes.container}>
          <div className={classes.showcaseContent}>
            <h1><span className={classes.text}>Manage</span> Your Property</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi laboriosam. Repellendus officia harum eaque.</p>
            <a className={classes.btn} href="/#">About Our Application</a>
          </div>
        </div>
      </div>

      <section>
        <div className={classes.box}>
          <FontAwesomeIcon icon={faSitemap} size="3x"/>
          <h3>Great Organization</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
        </div>
        <div className={classes.secondbox}>
          <FontAwesomeIcon icon={faClock} size="3x"/>
            <h3>Quick Response Time</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
        </div>
            
            <div className={classes.box}>
            <FontAwesomeIcon icon={faSearch} size="3x"/>
            <h3>Transparency</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
        </div>
      </section>
    </div>
  )
}

export default Home