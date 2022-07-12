import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

import Footer from "../../components/Footer/Footer"

class Events extends Component {
  token = "6NWNDLHLOGO6UBJ6FAWS";
  ordenar = "date";

  state = {
    categorias: [],
    eventos: [],
  };

  componentDidMount() {
    console.log("Listo");
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((categorias) => {
        this.setState({
          categorias: categorias.categories,
        });
      });
  };

  obtenerEventos = async (busqueda) => {
    // console.log(busqueda);

    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    // console.log(url);

    await fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((eventos) => {
        // console.log(eventos.events);
        this.setState({
          eventos: eventos.events,
        });
      });
  };

  render() {
    return (
      <div className="eventos">
        <div className="navigatorAdmin">
          <Navigation />
        </div>
        <div className="eventos">
        <img className="backroundImage" src="https://overdrivestudiosdotes.files.wordpress.com/2014/09/people-concert-wallpaper-1080p-backgrounds-concert-people-background-25952.jpg" alt="Backround"></img>

         
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

        
export default Events;
