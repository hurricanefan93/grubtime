import React, { Component } from 'react'

class SearchResults extends Component {
  render () {
    return <div className='SearchResults'>
      <table>
        <tr>
          <td> Five Bucks Drinkery </td>
          <td> <i className='fa fa-star' aria-hidden='true' /> </td>
        </tr>
        <tr>
          <td> Caddy's </td>
        </tr>
        <tr>
          <td> Lucky Dill </td>
        </tr>
      </table>
    </div>
  }
}

export default SearchResults
