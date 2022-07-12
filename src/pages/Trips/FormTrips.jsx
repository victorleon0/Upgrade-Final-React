import ExperienceOne from "../../components/Experiences/ExperienceOne";

import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";




const FormTrips = () => {





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

export default FormTrips;
