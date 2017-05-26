import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import SearchResults from './SearchResults'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            {/* {auth.isSignedIn ? } */}
            <Route exact path='/' component={Home} />
            <Route path='/auth0' component={Login} />
            <Route path='/user/:name' component={Profile} />
            <Route path='/search' component={SearchResults} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
