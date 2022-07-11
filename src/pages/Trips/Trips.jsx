import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ExperiencesList from "../../components/Experiences/ExperiencesList.jsx";
import Footer from "../../components/Footer/Footer"



const Trips = () => {
 

  return (
    <div className="trips">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-container">
      <ExperiencesList/>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Trips;
