import React, {Component} from 'react'
import Event from '../components/event'
import Header from '../components/header'
import RightSide from '../components/rightside'
import LeftSide from '../components/leftside'
import Advertisement from '../components/advertisement'
import DaysOfTheWeek from '../components/daysoftheweek'
import Navigation from '../components/navigation'
import axios from 'axios'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      mylist: [],
    }
  }
    // state = {
    //     mylist: [
    //       {
    //         id: 1,
    //         title:'nyama choma',
    //         location:'club seven',
    //         entrace:'10000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 2,
    //         title:'Movie Day',
    //         location:'aura',
    //         entrace:'10000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 3,
    //         title:'beach party',
    //         location:'Jangwani sea breeze',
    //         entrace:'15000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 4,
    //         title:'Zilipendwa',
    //         location:'Maisha Club',
    //         entrace:'15000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 5,
    //         title:'Tigo MasterP Pass',
    //         location:'Coco beach',
    //         entrace:'00000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 6,
    //         title:'Usiku wa Sotojo',
    //         location:'Club 7',
    //         entrace:'15000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       },
    //       {
    //         id: 7,
    //         title:'Pens Down',
    //         location:'Mbalamwezi',
    //         entrace:'15000',
    //         description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...'
    //       }
    //     ]
        
    //   }

    // componentDidMount(){
    //   fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => this.setState({mylist:data}))
    // }
    componentDidMount(){
      axios.get('http://127.0.0.1:8000/event/event_details/api/list/event_data/').then(res =>{this.setState({mylist:res.data})})
    }
    render(){
        return(
        <div>
          <Navigation title="Bongo Event"/>
          <div className="container all_contents">
            <div className="row">
                <div className="col-md-3">
                <LeftSide/>
                <DaysOfTheWeek/>
                </div>
                <div className="col-md-6 center_list">
                <Header/>
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