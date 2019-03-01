import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import DetailsView from './pages/detailsView'
import Navigation from './components/navigation'
import ForgotPassword from './pages/forgetpass'
import Error from './pages/errer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <Navigation title="Bongo Event"/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/reset-password" component={ForgotPassword}/>
            <Route path="/event-details/:eventID" component={DetailsView}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
