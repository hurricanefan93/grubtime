import React, { Component } from 'react'
import Map from './Map'

class Home extends Component {
  state = {
    locationQuery: null
  }

  _submit = (event) => {
    event.preventDefault()
    this.setState({
      locationQuery: this.refs.query.value
    })
  }

  render () {
    return <div className='Home'>
      <div className='mapSearch'>
        <form action='#' onSubmit={this._submit}>
          <div className='searchbar'>
            <input type='search' ref='query' className='search' placeholder='Enter your location..' />
          </div>
        </form>
        <div className='mapContainer' style={{ width: 800, height: 800 }}>
          <Map
            locationQuery={this.state.locationQuery}
            containerElement={<div style={{height: 100 + '%', width: 100 + '%'}} />}
            mapElement={<div style={{height: 100 + '%', width: 100 + '%'}} />} />
        </div>
      </div>
    </div>
  }
}

export default Home
