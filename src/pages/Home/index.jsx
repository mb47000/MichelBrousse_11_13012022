import React, { Component } from 'react'
import fetchHousings from '../../utils/fetch'

export class Home extends Component {
  componentDidMount() {
    console.log(fetchHousings.all())
  }

  render() {
    return <div>Home</div>
  }
}

export default Home
