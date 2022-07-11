import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import ProfileList from '../../containers/ProfileList';

const ManageUsers = () => {
  return (
    <div className="admin">
    <div className="navigatorAdmin">
      <NavigationAdmin />
    </div>
    <div className="users-container">
    <ProfileList/>
    </div>
    <div className="buscadorHome">
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>

  )
}

export default ManageUsers;