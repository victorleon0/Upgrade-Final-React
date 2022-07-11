import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
    token = '6NWNDLHLOGO6UBJ6FAWS';
    ordenar = 'date';

    state = { 
        eventos : []
     }

    // Metodo que va a obtener los eventos 
    obneterEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        const eventos = await axios(url);

        // console.log(eventos.data.events);
        this.setState({
            eventos : eventos.data.events
        })

    }

    render() { 
        return ( 
            <EventsContext.Provider
                value={{
                    eventos : this.state.eventos,
                    obtenerEventos: this.obneterEventos
                }}
                >
                {this.props.children}
            </EventsContext.Provider>
         );
    }
}
 

export default EventsProvider;