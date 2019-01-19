import React, { Component } from 'react'

class DaysOfTheWeek extends Component {
  render() {
    return (
      <div className="outer_container_days left_sticky">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Filter by Day <i className="fa fa-filter"></i></h1>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" for="customCheck1">Monday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                        <label className="custom-control-label" for="customCheck2">Tuesday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                        <label className="custom-control-label" for="customCheck3">Wednesday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                        <label className="custom-control-label" for="customCheck4">Thursday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                        <label class="custom-control-label" for="customCheck5">Friday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                        <label className="custom-control-label" for="customCheck6">Saturday</label>
                    </div>
                    <hr/>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                        <label className="custom-control-label" for="customCheck7">Sunday</label>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default DaysOfTheWeek
