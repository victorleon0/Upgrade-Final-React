import React from 'react';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer'

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <img className="backroundImage" src="https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b74f79bd6983b85d41918_06_CONTACTO_VIVUS.jpeg" alt="Backround"></img>
      <Contact/>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    
  )
}

export default ContactPage