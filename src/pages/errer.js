import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return(
        <div className="error_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>Error: 404 page not found</h1>
                        <Link to="/" className="return_home btn btn-sm">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error