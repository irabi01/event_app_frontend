import React, {Component} from 'react'
import Event from '../components/event'
import Header from '../components/header'
import RightSide from '../components/rightside'
import LeftSide from '../components/leftside'
import Advertisement from '../components/advertisement'
import DaysOfTheWeek from '../components/daysoftheweek'
// import Navigation from '../components/navigation'
import axios from 'axios'
import SearchEvent from '../components/searchevent';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      mylist: [],
    }
  }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/event/event_details/api/list/event_data/').then(res =>{this.setState({mylist:res.data})})
    }
    render(){
        return(
        <div>
          <div className="container all_contents">
            <div className="row">
                <div className="col-md-3">
                <LeftSide/>
                <DaysOfTheWeek/>
                </div>
                <div className="col-md-6 center_list">
                <Header/>        
                <SearchEvent/>
                <Event eventlist = {this.state.mylist}/>
                </div>
                <div className="col-md-3">
                <RightSide/>
                <Advertisement />
                </div>
            </div>
          </div>
        </div>
        );
    }
}
export default Home