import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation_header">
        <nav class="navbar navbar-expand-lg fixed-top navigation" id="my_navbar">
            <Link className="navbar-brand logo" to="/">{this.props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="cpBtn">
                  <div></div>
                  <div></div>
                  <div></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                </li>
                </ul>
                
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/login" tabindex="-1" aria-disabled="true">Sign in</Link>
                </li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
