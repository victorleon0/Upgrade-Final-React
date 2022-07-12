import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
        <img
          className="backroundImage"
          src="https://rdacustica.com/wp-content/uploads/2018/12/Contact-us-background.jpg"
          alt="Backround"
        ></img>
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
