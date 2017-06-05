import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import nightbbq from '../images/nightbbq.webm'

class Landing extends Component {
  render () {
    return <div className='Landing'>
      <div className='Container'>
        <Link to='/home'><button> Get Grub </button></Link>
      </div>
      <video playsInline autoPlay muted loop>
        <source src={nightbbq} type='video/webm' />
      </video>
    </div>
  }
}

export default Landing
