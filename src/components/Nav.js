import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ui from '../ui'
import logowhite from '../logowhite.png'

class Nav extends Component {
  render () {
    return <header>
      <nav className='Computer'>
        <div className='Logo'>
          <h1><NavLink to='/'>GrubTime</NavLink></h1>
        </div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/auth0'>Login</NavLink></li>
          <li><NavLink to='/user/:name'>Profile</NavLink></li>
        </ul>
      </nav>
      <nav className='Mobile'>
        <div className='Logo'>
          <h1><NavLink to='/'><img src={logowhite} height='80px' width='80px' /></NavLink></h1>
        </div>
        <div className='Login'>
          <button onClick={() => ui.toggleMenu()}><i className='fa fa-bars' aria-hidden='true' /></button>
        </div>
      </nav>
    </header>
  }
}

export default Nav
