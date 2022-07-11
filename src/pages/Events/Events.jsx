<<<<<<< HEAD
import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import EventsForm from "../../components/Events/EventsForm";
import EventList from "../../components/Events/EventList";
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
        <EventsForm
                      categorias={this.state.categorias}
                      obtenerEventos={this.obtenerEventos}
          ></EventsForm>
          <EventList
                    eventos={this.state.eventos}
          ></EventList> 
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
=======
import React from 'react';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Contact from "../../components/Contact/Contact.jsx";

const Events = () => {
  return (
    
    <div>
    <div className="navigator">
    <Navigation />
    
    </div>
    <Contact />
    </div>
    
    
    


    
    
  
    
    
  )
>>>>>>> origin/Contact-Form
}

        

export default Events;
