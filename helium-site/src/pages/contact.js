import React from 'react'
import classes from './contact.module.css'
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