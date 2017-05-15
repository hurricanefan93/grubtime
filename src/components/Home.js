import React, { Component } from 'react'

class Home extends Component {
  render () {
    return <div className='Home'>
      <form>
        <div className='searchbar'>
          <input type='search' ref='query' className='search' placeholder='Enter your location..' />
        </div>
      </form>
    </div>
  }
}

export default Home
