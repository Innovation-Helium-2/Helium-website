import React from 'react'
import classes from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div>
      <section className={classes.py}>
        <div className={classes.container}>
          <h1><span className={classes.text}>Contact</span> Us</h1>
          <p>Fill out the form below and we will contact you shortly!</p>
        </div>
        <form  className={classes.container}>
        <div className={classes.group}>
          <label for="name">Name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className={classes.group}>
          <label for="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className={classes.group}>
          <label for="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit" className={classes.btn}>Submit</button>
      </form>
      </section>

      <section className={classes.dark}>
        <div className={classes.container}>
              <div className={classes.box}>
                <FontAwesomeIcon icon={faLocation} size="3x"/>
                <h3>Location</h3>
                <p>123 Main st, Rochester NY</p>
              </div>
              <div className={classes.box}>
                  <FontAwesomeIcon icon={faPhone} size="3x"/>
                  <h3>Phone Number</h3>
                  <p>(555) 555-5555</p>
              </div>
              <div className={classes.box}>
                  <FontAwesomeIcon icon={faMailBulk} size="3x"/>
                  <h3>Email Address</h3>
                  <p>service@h2o.com</p>
              </div>
    </div>
  </section>
    </div>
    // <div style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '90vh'
    // }
    // }>
    // <h1>Contact</h1>
    // </div>
  
    )
}

export default Contact