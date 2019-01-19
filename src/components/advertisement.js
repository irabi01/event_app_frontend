import React from 'react'
import {Link} from 'react-router-dom'

function Advertisement(){
    return(
        <div className='Advertisement_side_container right_sticky'>
            <div className='advertisement_side'>
              <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Advertisements</h2>
                        <hr/>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ require('../images/vodacom.jpg') } className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={ require('../images/image1.jpg') } className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={ require('../images/vodacom.jpg') } className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        </div>
                        <p>Advertise your product here</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_section">
                            <Link to="/about" className="link">About</Link> | <Link to="/contact" className="link">Contact</Link> | <Link to="#" className="link">Privacy policy</Link>
                            <div className="copyright_container">
                                <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())} Bongo Event. All right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        
    )
}

export default Advertisement