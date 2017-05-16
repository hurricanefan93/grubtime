import React, { Component } from 'react'
import Map from './Map'
class Home extends Component {
  render () {
    return <div className='Home'>
      <div className='mapSearch'>
        <form>
          <div className='searchbar'>
            <input type='search' ref='query' className='search' placeholder='Enter your location..' />
          </div>
        </form>
        <div className='mapContainer' style={{ width: 400, height: 400 }}>
          <Map
            center={{ lat: 40.728199, lng: -73.9894738 }}
            containerElement={<div style={{height: 100 + '%'}} />}
            mapElement={<div style={{height: 100 + '%'}} />} />
        </div>
      </div>
    </div>
  }
}

export default Home
