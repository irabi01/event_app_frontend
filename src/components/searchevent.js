import React, { Component } from 'react'

export class SearchEvent extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search by event title or location here" className="search_form form-control"/>
      </div>
    )
  }
}

export default SearchEvent
