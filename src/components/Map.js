import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

@withGoogleMap
class Map extends Component {
  render () {
    const markers = this.props.markers || []
    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: -35.363883, lng: 131.044822 }}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default Map
