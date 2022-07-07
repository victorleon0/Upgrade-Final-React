import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';

const Admin = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="hero-container">
      <h1 className="title">ADMIN ADMIN</h1>

      </div>
      <div className="buscadorHome">
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Admin