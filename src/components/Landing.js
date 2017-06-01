import React, { Component } from 'react'
import logowhite from '../logowhite.png'
import nightbbq from '../images/nightbbq.webm'

class Landing extends Component {
  render () {
    return <div className='Landing'>
      <button> Get Grub </button>
      {/* <img src={logowhite} height='100px' width='100px' /> */}
      <video playsInline autoPlay muted loop>
        <source src={nightbbq} type='video/webm' />
      </video>
    </div>
  }
}

export default Landing
