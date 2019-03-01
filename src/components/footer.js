import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
    <div className="col-md-12">
        <div className="footer_section">
            <Link to="/about" className="link">About</Link> | <Link to="/contact" className="link">Contact</Link> | <Link to="#" className="link">Privacy policy</Link>
            <div className="copyright_container">
                <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())} Bongo Event. All rights reserved</p>
            </div>
        </div>
    </div>
    )
  }
}

export default Footer
