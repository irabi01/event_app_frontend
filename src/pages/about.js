import React, {Component} from 'react'
import Footer from '../components/footer';


class About extends Component{
    render(){
        return(
            <div className="about_container">
                <div className="about_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>About <span>Bongo</span> Event</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_content">
                    <div className="container">
                    <h1>How Does Bongo Event Work?</h1>
                    <p>Every day, millions of people around the country post, like, and comment in communities organized around their interests.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about_post">
                                    <h1>Post</h1>
                                    <p>The community can share content by posting stories, links, images, and videos.</p>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="about_comment">
                                    <h1>Comment</h1>
                                    <p>The community comments on posts. Comments provide discussion and often humor.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_likes">
                                    <h1>Like</h1>
                                    <p>Comments & posts can be upvoted or downvoted. The most interesting content rises to the top.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="this_is_a_footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default About