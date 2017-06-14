import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { post } from '../api'

@withGoogleMap
class Map extends Component {
  state = {
    openInfoId: null,
    center: {
      lat: -82.4572,
      lng: 27.9506
    },
    places: []
  }

  geocoder = new window.google.maps.Geocoder()

  componentDidUpdate (prevProps, prevState) {
    if (prevState.center.lat !== this.state.center.lat && prevState.center.lat !== this.state.center.lat) {
      post('/api/Places', {
        latitude: this.state.center.lat,
        longitude: this.state.center.lng,
        radius: 1500
      }).then((data) => {
        this.setState({
          places: data.results
        })
      })
    }

    if (prevProps.locationQuery !== this.props.locationQuery && this.props.locationQuery) {
      this.geocoder.geocode({ address: this.props.locationQuery }, (result) => {
        console.log(result)
        if (result.length > 0) {
          this.setState({
            center: {
              lat: result[0].geometry.location.lat(),
              lng: result[0].geometry.location.lng()
            }
          })
        } else {
          window.alert('No location found')
        }
      })
    }
  }

  _mapClick = (event) => {
    console.log(event.latLng.lat(), event.latLng.lng())
  }

  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }
  }

  render () {
    const markers = this.state.places.map((place) => {
      return {
        id: place.id,
        position: place.geometry.location,
        title: place.name,
        hours: place.opening_hours,
        icon: {
          url: place.icon,
          scaledSize: new window.google.maps.Size(20, 20)
        }
      }
    })
    return (
      <div>
        <GoogleMap
          defaultZoom={14}
          center={this.state.center}
          onClick={this._mapClick}
          >
          {markers.map((marker, i) => (
            <Marker {...marker} key={i}
              onClick={() => { this.setState({ openInfoId: marker.id }) }}>
              {marker.id === this.state.openInfoId && (
                <InfoWindow onCloseClick={() => { this.setState({ openInfoId: null }) }}>
                  <div style={{ color: '#333' }}>
                    <h4 style={{ marginTop: '0' }}>{marker.title}</h4>
                    <p>Open Now!</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
        <div className='list'>
          <ul className='results'>
            {this.state.places.map((place, i) => {
              return <li key={i}>
                <h2>{place.name}</h2>
                <p>Rating: {place.rating}</p>
                <p>Location: {place.vicinity}</p>
                {/* <p>Photo: {place.photos}</p> */}
                {/* <p>{JSON.stringify(place)}</p> */}
              </li>
            })}
          </ul>
        </div>
      </div>

    )
  }
}

export default Map
