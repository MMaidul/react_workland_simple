import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
  return (
    <div className="contact__section">
      <div className="contact">
        <img
          src="/src/assets/Imgs/contact.jpg"
          alt="location image"
          className="contact__img"
        />
        <div className="contact__form">
          <h1>Get in touch</h1>
          <p>Drop me a line say hello or about opportunities</p>
          <form action="">
            <div className="input__group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value="mention your name"
              />
            </div>
            <div className="input__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value="mention your email"
              />
            </div>
            <div className="input__group">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg"></textarea>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
