import React, { Component } from 'react'
import logowhite from '../logowhite.png'

class Landing extends Component {
  render () {
    return <div className='Landing'>
      <video playsInline autoPlay muted loop>
        <source src='../images/nightbbq.mp4' type='video/mp4' />
      </video>
      <img src={logowhite} height='100px' width='100px' />
    </div>
  }
}

export default Landing
