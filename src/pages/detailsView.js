import React, { Component } from 'react'
import Advertisement from '../components/advertisement'
import axios from 'axios';

export class DetailsView extends Component {

    state = {
        singleEvent: {}
    }

    componentDidMount(){
        const eventID = this.props.match.params.eventID;
        axios.get(`http://127.0.0.1:8000/event/event_details/api/list/event_data/${eventID}`).then(res => {this.setState({singleEvent:res.data})})
    }

  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="event_content_full">
                        <img src={ this.state.singleEvent.image } className="img-fluid img-thumbnail" alt="bongo-event"/>
                        <div className = "row">
                            <div className="col-md-6">
                                <h1>Title: <span>{this.state.singleEvent.title}</span></h1>
                            </div>
                            <div className="col-md-6">
                                <h1>Location: <span><i className="fa fa-map-marker"></i> {this.state.singleEvent.location}</span></h1>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Dj: <span><i className="fa fa-user"></i> {this.state.singleEvent.dj}</span></h1>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Date: <span>{this.state.singleEvent.eventDate}</span></h1>
                            </div>
                            <div className="col-md-4">
                                <h1>Time: <span>{this.state.singleEvent.eventTime}</span></h1>
                            </div>
                            <div className="col-md-4">
                                <h1>Entrace: <span>{this.state.singleEvent.entraceFee}/= Tshs</span></h1>
                            </div>
                        </div>
                        <hr/>
                        <p>{this.state.singleEvent.paragraph}</p>
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <Advertisement />
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default DetailsView
