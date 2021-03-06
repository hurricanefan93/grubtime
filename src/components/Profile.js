import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import auth from '../auth'

class Profile extends Component {
  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.chatText
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    console.log(auth.profile)
    if (auth.isSignedIn) {
      return <div className='Profile'>
        <h1>Garret Morales</h1>
        <div className='profileLayout'>
          <div className='profileImg'>
            <img src={auth.profile.picture} alt='user avatar' width='35%' height='35%' />
          </div>
          <div className='profileInfo'>
            <ul>
              <li>{auth.profile.name}</li>
              <li>{auth.profile.email}</li>
              {/* <li />
              <li /> */}
            </ul>
          </div>
          <div className='inputContainer'>
            <form onSubmit={this._submit}>
              <input type='text' className='revText' ref='reviewText' placeholder='Leave an experience' />
            </form>
          </div>
        </div>
        {/* <h3>Currently under construction... <i className='fa fa-spinner fa-spin fa-2x fa-fw' aria-hidden='true' /></h3> */}
      </div>
    } else {
      return <Redirect to='/home' />
    }
  }
  }

export default Profile
