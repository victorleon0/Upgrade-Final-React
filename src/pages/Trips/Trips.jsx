import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ExperiencesAll from "../../components/Experiences/ExperiencesAll";
import Footer from "../../components/Footer/Footer"



const Trips = () => {
 

  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <ExperiencesAll/>
      

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Trips;
