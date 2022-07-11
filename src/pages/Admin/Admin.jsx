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
      <h1 className="title">¡Bienvenido!</h1>
      <h4 className="title">Utiliza la barra de navegación para gestionar excursiones y usuarios</h4>

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