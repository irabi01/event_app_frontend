import React, {Component} from 'react'


class About extends Component{
    render(){
        return(
            <div className="about_container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1>About<span>Bongo Event</span></h1>
                        </div>
                    </div>
                </div>
                <div className="about_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h1>Left</h1>
                            </div>
                            <div className="col-md-3">
                                <h1>Center</h1>
                            </div>
                            <div className="col-md-3">
                                <h1>Right</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About