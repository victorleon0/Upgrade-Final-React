import React from "react";
import EditComponent from "../../components/ExperiencesAdmin/EditForm/EditForm";
import Footer from "../../components/Footer/Footer";
import NavigationAdmin from "../../components/NavigationAdmin/NavigationAdmin";
import ExperiencesAllAdmin from "../../components/ExperiencesAdmin/ExperiencesAllAdmin";



const ManageExperiences = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="users-container">
      <ExperiencesAllAdmin/>
      </div>
      <div className="buscadorHome"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ManageExperiences;
