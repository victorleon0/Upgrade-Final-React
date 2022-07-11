import React, {Component} from 'react'

class EventList extends Component{

render(){

  const events = this.props.events.map((event,i)=>{
    return(
      <a href={event.url} className="event" key={i}>
        <div>
        {event.logo ? <img className="event-image" src={event.logo.url} alt={event.name.text} /> : null}
        </div>
        <div className="event-info">
          <h1 className="event-title">{event.name.text}</h1>
          <h2 className="event-date">{new Date(event.start.local).toDateString() }</h2>
          <h2 className="event-date">{new Date(event.start.local).toLocaleTimeString().slice(0,5) }</h2>
          <div>
            {event.description.text&&event.description.text.length >200 ?
               <p className="event-description">{event.description.text.substr(0,200)}...</p> :
               <p className="event-description">{event.description.text}</p>
             }
          </div>
        </div>
      </a>
    )
  })

    return(
      <div className="event-container">
        {events}
        {this.props.error && <p className="apology">{this.props.error}</p>}
      </div>
    )}
}

export default EventList