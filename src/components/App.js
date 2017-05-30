import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import { observer } from 'mobx-react'
import Landing from './Landing'

@observer
class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            {/* {auth.isSignedIn ? } */}
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/auth0' component={Login} />
            <Route path='/user' component={Profile} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
