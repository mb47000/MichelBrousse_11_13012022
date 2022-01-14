import React, { Component } from 'react'
import fetchHousings from '../../utils/fetch'
import Slider from '../../components/Slider'

export class Home extends Component {
  componentDidMount() {
    console.log(fetchHousings.all())
  }

  render() {
    return <div></div>
  }
}

export default Home
