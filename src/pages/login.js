import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }
    loginButtonClick(e){
        e.preventDefault();
        alert("login button clicked");
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
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <button onClick = {this.loginButtonClick} className="btn btn-primary btn-sm btn-block login_btn">Sign in</button>
                            </form>
                                <hr/>
                                <p><Link to="#" className="forgot_password">Forgot password?</Link></p>
                                <hr/>
                                <div className="copyright_container">
                                    <p>Copyright <i className="fa fa-copyright"></i> {(new Date().getFullYear())}. Bongo Events</p>
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