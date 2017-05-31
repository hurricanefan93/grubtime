import React, { Component } from 'react'
import logowhite from '../logowhite.png'
import nightbbq from '../images/nightbbq.webm'

class Landing extends Component {
  render () {
    return <div className='Landing'>
      <video playsInline autoPlay muted loop>
        <source src={nightbbq} type='video/webm' />
      </video>
      <img src={logowhite} height='100px' width='100px' />
    </div>
  }
}

export default Landing
