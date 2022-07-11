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
      <Contact/>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    
  )
}

export default ContactPage