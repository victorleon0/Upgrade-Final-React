import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationUser from '../../components/NavigationAdmin/NavigationAdmin';

const User = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationUser />
      </div>
      <div className="hero-container">
      <h1 className="title">USER USER USER</h1>

      </div>
      <div className="buscadorHome">
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default User