import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation_header">
        <nav class="navbar navbar-expand-lg fixed-top navigation" id="my_navbar">
            <Link class="navbar-brand logo" to="/">{this.props.title}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="cpBtn">
                  <div></div>
                  <div></div>
                  <div></div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="#">Action</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="#">Another action</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="#">Something else here</Link>
                    </div>
                </li>
                </ul>
                
                <ul class="navbar-nav ml-auto">
                <li>
                    <input type="text" placeholder="Search by event name or location here" className="search_form form-control"/>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/account/login" tabindex="-1" aria-disabled="true">Sign in</Link>
                </li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
