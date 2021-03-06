import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import ui from '../ui'
import cx from 'classnames'
import logowhite from '../logowhite.png'
import auth from '../auth'

@observer
class Nav extends Component {
  render () {
    return <header>
      <nav className='Computer'>
        <div className='Logo'>
          <h1><NavLink to='/home'>GrubTime</NavLink></h1>
        </div>
        <ul>
          <li><NavLink to='/home'>Home</NavLink></li>
          {auth.isSignedIn ? <li><NavLink onClick={() => auth.signOut()} to='/home'>Logout</NavLink></li> : <li><NavLink onClick={() => auth.signIn()} to='/home'>Login</NavLink></li>}
          <li><NavLink to='/user/:name'>Profile</NavLink></li>
        </ul>
      </nav>
      <nav className='Mobile'>
        <div className='Logo'>
          <h1><NavLink to='/home'><img src={logowhite} height='80px' width='80px' /></NavLink></h1>
          <button onClick={() => ui.toggleMenu()}><i className='fa fa-bars' aria-hidden='true' /></button>
        </div>
        <aside className={cx('menuMobile', { hidden: !ui.menuShown })}>
          <section>
            <ul>
              {auth.isSignedIn ? <li><NavLink onClick={() => auth.signOut()} to='/'>Logout</NavLink></li> : <li><NavLink onClick={() => auth.signIn()} to='/'>Login</NavLink></li>}
              <li onClick={() => ui.toggleMenu()}><NavLink to='/home'>Home</NavLink></li>
              <li onClick={() => ui.toggleMenu()}><NavLink to='/user/:name'>Profile</NavLink></li>
            </ul>
          </section>
        </aside>
      </nav>
    </header>
  }
}

export default Nav
