import React, { Component } from 'react'
import headshotcopy from '../images/headshotcopy.jpg'

class Profile extends Component {
  render () {
    return <div className='Profile'>
      <h1>Garret Morales</h1>
      <div className='profileLayout'>
        <div className='profileImg'>
          <img src={headshotcopy} alt='user avatar' width='35%' height='35%' />
        </div>
        <div className='profileInfo'>
          <ul>
            <li>age</li>
            <li>starred restaurants</li>
            <li />
            <li />
          </ul>
        </div>
      </div>
      <h3>Currently under construction... <i className='fa fa-spinner fa-spin fa-2x fa-fw' aria-hidden='true' /></h3>
    </div>
  }
}

export default Profile
