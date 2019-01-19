import React, { Component } from 'react'
import EventList from './eventlist'
import PropTypes from 'prop-types'


class Event extends Component {
  render() {
    return this.props.eventlist.map((listevent) => (   
            <EventList key = {listevent.id} listevent = {listevent}/>
    ));
  }
}

//PropTypes
Event.propTypes = {
    eventlist: PropTypes.array.isRequired
}

export default Event
 