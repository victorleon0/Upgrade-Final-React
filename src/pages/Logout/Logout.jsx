import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import HomeButton from '../../components/HomeButton/HomeButton';

const Admin = () => {
  return (
    <div className="admin">
      <div className="navigatorAdmin">
        <NavigationAdmin />
      </div>
      <div className="hero-container">
      <h1 className="title">¡Gracias por confiar en nosotros!</h1>
      <h4 className="title">Vuelve Pronto</h4>
      <HomeButton />
      <h5 className="title">Volver a la página principal</h5>

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