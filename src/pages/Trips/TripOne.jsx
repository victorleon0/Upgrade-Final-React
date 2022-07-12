import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ExperienceOne from "../../components/Experiences/ExperienceOne";
import Footer from "../../components/Footer/Footer"



const Trips = () => {

    
 

  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <ExperienceOne/>
      

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Trips;
