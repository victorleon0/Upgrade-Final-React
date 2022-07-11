import React, { Component } from 'react';
import Event from './Event.jsx';
import PropTypes from 'prop-types';

class EventList extends Component {
    render() {
        return(
            <div className="uk-child-width-1-3@m" uk-grid="true">
                { Object.keys(this.props.eventos).map(key => (
                    <Event
                            key={key}
                            info={this.props.eventos[key]}
                    ></Event>
                )) }
            </div>
        )
    }
}

EventList.propTypes = {
    eventos: PropTypes.array.isRequired,
}

export default EventList;