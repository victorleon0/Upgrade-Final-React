import React, {Component} from 'react';
import axios from 'axios';

import EventsForm from '../../components/Events/EventsForm';
import EventList from '../../components/Events/EventList';

class Events extends Component {
constructor(props){
  super(props);

  this.state={
    events: [],
    categories: [],
    subcategories: [],
    error: undefined,
  }
};

  getEvents = async params => {
    let url = "https://www.eventbriteapi.com/v3/events/search/?location.address=${params.city}&categories=${params.category}&subcategories=${params.subcategory}&sort_by=date&token=${6NWNDLHLOGO6UBJ6FAWS}";
      try{
        const response = await axios.get(url);
        const { events } = response.data;
          if(events.length>0){
            this.setState({ events: events,
                            error: "",
                          })} else {
            this.setState({ events: events,
                            error: "Sorry, there are currently no events listed" })}
          }
      catch(err){
          this.setState({ events: [],
                          error: "Please enter a valid location",
                        })
                      }

  };

  componentDidMount() {
  this.getCategories();
}

getCategories = async () => {
  let url = "https://www.eventbriteapi.com/v3/categories/?token=${6NWNDLHLOGO6UBJ6FAWS}";

  let response = await axios.get(url);
  const { categories } = response.data;

  this.setState({
    categories: categories
  });
};

getSubCategories = async categ => {
  if(categ!==''){
  let url = "https://www.eventbriteapi.com/v3/categories/${categ}/?token=${6NWNDLHLOGO6UBJ6FAWS}";

  let response = await axios.get(url);
  const { subcategories } = response.data;
  this.setState({
    subcategories: subcategories
  });
}
};


render(){


  return (
    <div className="events">
        
        <EventsForm getEvents={this.getEvents} getSubCategories={this.getSubCategories} categories={this.state.categories} subcategories={this.state.subcategories}/>
        <EventList events={this.state.events} error={this.state.error} />
    </div>
  )};
}

export default Events;