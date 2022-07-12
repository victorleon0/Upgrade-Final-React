import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import ExperienceList from '../../containers/ExperienceList';

const ManageExperiences = () => {
  return (
    <div className="admin">
    <div className="navigatorAdmin">
      <NavigationAdmin />
    </div>
    <div className="users-container">
    <ExperienceList/>
    </div>
    <div className="buscadorHome">
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>

  )
}

export default ManageExperiences;