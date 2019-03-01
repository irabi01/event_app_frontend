import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }
    loginButtonClick(e){
        e.preventDefault();
        alert("Ooooops...! please wait, we are working on it");
        console.log('irabi coder');
    }
    render(){
        return(
            <div className="forget_pass_container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                        <div className="card card_style">
                            <div className="card-body">
                            <h1>Bongo Events</h1>
                            <h2>Reset your password</h2>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <button onClick = {this.loginButtonClick} className="btn btn-primary btn-sm forgot_pass_btn btn-block">send me reset password instructions</button>
                            </form>
                                <hr/>
                                <p><Link to="/login" className="login_button">Log in</Link></p>
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
export default ForgotPassword