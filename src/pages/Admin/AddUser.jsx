import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import PostProfile from '../../containers/PostProfile';

const ManageUsers = () => {
  return (
    <div className="admin">
    <div className="navigatorAdmin">
      <NavigationAdmin />
    </div>
    <div className="users-container">
    <PostProfile/>

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