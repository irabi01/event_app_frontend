import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }
    loginButtonClick(e){
        e.preventDefault();
        alert("Ooooops...! please wait, we are working on it.");
        console.log('irabi coder');
    }
    render(){
        return(
            <div className="login_container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                        <div className="card card_style">
                            <div className="card-body">
                            <h1>Bongo Events</h1>
                            <h2>Sign in</h2>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" className="form-control" placeholder="Password (6 minimum characters)"/>
                                </div>
                                <button onClick = {this.loginButtonClick} className="btn btn-primary btn-sm btn-block login_btn">Sign in</button>
                            </form>
                                <hr/>
                                <p><Link to="/reset-password" className="forgot_password">Forgot password?</Link></p>
                                <hr/>
                                <div className="copyright_container">
                                    <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())} Bongo Events. All rights reserved</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login