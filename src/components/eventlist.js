import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class EventList extends Component {

  render() {
    return (
            <div className='eventlist'>
                <div className="all_list_container">
                    <img src={ this.props.listevent.image } className="img-fluid" alt="bongo-event"/>
                    <div className="row love_and_share">
                        <div className="col-md-6">
                            <i className="fa fa-heart-o"></i> 700
                        </div>
                        <div className="col-md-6">
                            <i className="fa fa-share"></i>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                        <p><strong>Title:</strong> {this.props.listevent.title}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <i className="fa fa-map-marker"></i> {this.props.listevent.location}
                        </div>
                        <div className="col-md-6">
                            <i className="fa fa-tags"></i> {this.props.listevent.entraceFee}/= Tshs
                        </div>
                    </div>
                    <hr/>
                    <p><strong>Description:</strong> {this.props.listevent.paragraph} <br/><Link to={`/event-details/${this.props.listevent.id}`} className="btn btn-sm btn_view_more">Read more</Link></p>
                </div>
            </div>   
    )
  }
}

//PropTypes
EventList.propTypes = {
    listevent: PropTypes.object.isRequired
}

export default EventList
